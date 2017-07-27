$listNameLevel1 = "Mega Menu - Level 1"
$listNameLevel2 = "Mega Menu - Level 2"
$listNameLevel3 = "Mega Menu - Level 3"

function Create-LinksList {
    
    Param ($listName)

    # TODO - remove this!!!
    Remove-PnPList -Identity $listName -Force
    
    $list = New-PnPList -Title $listName -Template GenericList -EnableVersioning
    $field = Add-PnPField -DisplayName "Sort Order" -InternalName "SortOrder" -Type integer -AddToDefaultView -List $listName
    $field = Add-PnPField -DisplayName "Url" -InternalName "Url" -Type URL -AddToDefaultView -List $listName
    $field = Add-PnPField -DisplayName "Open in New Tab" -InternalName "OpenInNewTab" -Type boolean -AddToDefaultView -List $listName
    $field = Add-PnPField -DisplayName "Description" -InternalName "Description" -Type note -AddToDefaultView -List $listName

    return $list
}

function Create-LookupField {
    Param ($listNameToAddTo, $fieldInternalName, $fieldDisplayName, $lookedUpListGuid, $lookedUpListFieldTitle)
    $guid = [guid]::NewGuid()
    $xml = "<Field ID='$guid' DisplayName='$fieldDisplayName' Name='$fieldInternalName' StaticName='$fieldInternalName' Type='Lookup' Required='TRUE' EnforceUniqueValues='FALSE' List='$lookedUpListGuid' ShowField='$lookedUpListFieldTitle' />"
    Add-PnPFieldFromXml -FieldXml $xml -List $listNameToAddTo
}

# Create the lists for the 3 levels of menu.
Create-LinksList -listName $listNameLevel1
Create-LinksList -listName $listNameLevel2
Create-LinksList -listName $listNameLevel3

# Add the lookup fields to the L2 and L3 lists to associate with L1 and L2 items respectively
$level1List = Get-PnPList -Identity $listNameLevel1
$level2List = Get-PnPList -Identity $listNameLevel2
Create-LookupField -listNameToAddTo $listNameLevel2 -fieldInternalName "Level1Item" -fieldDisplayName "Level 1 Item" -lookedUpListGuid $level1List.Id -lookedUpListFieldTitle "Title" 
Create-LookupField -listNameToAddTo $listNameLevel3 -fieldInternalName "Level2Item" -fieldDisplayName "Level 2 Item" -lookedUpListGuid $level2List.Id -lookedUpListFieldTitle "Title" 

# Add the lookup field to the default view of each list
$view = Get-PnPView -List $listNameLevel2 -Identity "All Items"
$view.ViewFields.Add("Level1Item");
$view.Update();
$view.Context.ExecuteQuery();

$view = Get-PnPView -List $listNameLevel3 -Identity "All Items"
$view.ViewFields.Add("Level2Item");
$view.Update();
$view.Context.ExecuteQuery();

# Set up new default view of each list
$view = Add-PnPView -Title "Level 1 Menu Items" -List $listNameLevel1 -Fields "SortOrder","Title","Url","OpenInNewTab","Description" -Query "<OrderBy><FieldRef Name='SortOrder' Type='number' /></OrderBy>"
$view = Add-PnPView -Title "Level 2 Menu Items" -List $listNameLevel2 -Fields "SortOrder","Title","Url","OpenInNewTab","Description" -Query "<OrderBy><FieldRef Name='SortOrder' Type='number' /></OrderBy><GroupBy Collapse='FALSE'><FieldRef Name='Level1Item' Type='lookup' /></GroupBy>"
$view = Add-PnPView -Title "Level 3 Menu Items" -List $listNameLevel3 -Fields "SortOrder","Title","Url","OpenInNewTab","Description" -Query "<OrderBy><FieldRef Name='SortOrder' Type='number' /></OrderBy><GroupBy Collapse='FALSE'><FieldRef Name='Level2Item' Type='lookup' /></GroupBy>"

