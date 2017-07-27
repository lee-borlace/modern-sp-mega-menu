$listNameLevel1 = "Mega Menu - Level 1"
$listNameLevel2 = "Mega Menu - Level 2"
$listNameLevel3 = "Mega Menu - Level 3"

function Create-LinksList {
    
    Param ($listName)

    # TODO - remove this!!!
    Remove-PnPList -Identity $listName -Force
    
    write-host "Creating list $listName..." -NoNewline -ForegroundColor Gray

    $list = New-PnPList -Title $listName -Template GenericList -EnableVersioning
    $field = Add-PnPField -DisplayName "Sort Order" -InternalName "SortOrder" -Type number -AddToDefaultView -List $listName
    $field = Add-PnPField -DisplayName "Url" -InternalName "Url" -Type URL -AddToDefaultView -List $listName
    $field = Add-PnPField -DisplayName "Open in New Tab" -InternalName "OpenInNewTab" -Type boolean -AddToDefaultView -List $listName
    $field = Add-PnPField -DisplayName "Description" -InternalName "Description" -Type note -AddToDefaultView -List $listName

    write-host "done." -ForegroundColor Green

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

write-host "Creating lookup columns..." -NoNewline -ForegroundColor Gray

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

write-host "done." -ForegroundColor Green

# Set up new default view of each list
write-host "Creating default views..." -NoNewline -ForegroundColor Gray

$view = Add-PnPView -Title "Level 1 Menu Items" -List $listNameLevel1 -SetAsDefault -Fields "SortOrder","Title","Url","OpenInNewTab","Description" -Query "<OrderBy><FieldRef Name='SortOrder' Type='number' /></OrderBy>"
$view = Add-PnPView -Title "Level 2 Menu Items" -List $listNameLevel2 -SetAsDefault -Fields "SortOrder","Title","Url","OpenInNewTab","Description" -Query "<OrderBy><FieldRef Name='SortOrder' Type='number' /></OrderBy><GroupBy Collapse='FALSE'><FieldRef Name='Level1Item' Type='lookup' /></GroupBy>"
$view = Add-PnPView -Title "Level 3 Menu Items" -List $listNameLevel3 -SetAsDefault -Fields "SortOrder","Title","Url","OpenInNewTab","Description" -Query "<OrderBy><FieldRef Name='SortOrder' Type='number' /></OrderBy><GroupBy Collapse='FALSE'><FieldRef Name='Level2Item' Type='lookup' /></GroupBy>"

write-host "done." -ForegroundColor Green

# Create initial sample data
write-host "Creating sample data..." -NoNewline -ForegroundColor Gray

$lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

# Level 1
$organisation = Add-PnPListItem -List $listNameLevel1 -Values @{"Title" = "Organisation"; "SortOrder" = 1; "Url" = "/"; "OpenInNewTab" = "No"; "Description" = $lorem} -ContentType "Item"
$theManagementTeam = Add-PnPListItem -List $listNameLevel1 -Values @{"Title" = "The Management Team"; "SortOrder" = 2; "Url" = "/"; "OpenInNewTab" = "No"; "Description" = $lorem} -ContentType "Item"
$resources = Add-PnPListItem -List $listNameLevel1 -Values @{"Title" = "Resources"; "SortOrder" = 3; "Url" = "/"; "OpenInNewTab" = "No"; "Description" = $lorem} -ContentType "Item"
$newsAndEvents = Add-PnPListItem -List $listNameLevel1 -Values @{"Title" = "News and Events"; "SortOrder" = 4; "Url" = "/"; "OpenInNewTab" = "No"; "Description" = $lorem} -ContentType "Item"

# Level 2
$corporate = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Corporate"; "SortOrder" = 1; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $organisation.Id; "Description" = $lorem} -ContentType "Item"
$rd = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "R & D"; "SortOrder" = 2; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $organisation.Id; "Description" = $lorem} -ContentType "Item"
$projects = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Projects"; "SortOrder" = 3; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $organisation.Id; "Description" = $lorem} -ContentType "Item"
$production = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Production"; "SortOrder" = 4; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $organisation.Id; "Description" = $lorem} -ContentType "Item"

$theBoard = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "The Board"; "SortOrder" = 1; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $theManagementTeam.Id; "Description" = $lorem} -ContentType "Item"
$executive = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Executive"; "SortOrder" = 2; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $theManagementTeam.Id; "Description" = $lorem} -ContentType "Item"

$searchEngines = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Search Engines"; "SortOrder" = 1; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $resources.Id; "Description" = $lorem} -ContentType "Item"
$policies = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Policies"; "SortOrder" = 2; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $resources.Id; "Description" = $lorem} -ContentType "Item"
$procedures = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Procedures"; "SortOrder" = 3; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $resources.Id; "Description" = $lorem} -ContentType "Item"

$news = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "News"; "SortOrder" = 1; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $newsAndEvents.Id; "Description" = $lorem} -ContentType "Item"
$events = Add-PnPListItem -List $listNameLevel2 -Values @{"Title" = "Events"; "SortOrder" = 2; "Url" = "/"; "OpenInNewTab" = "No"; "Level1Item" = $newsAndEvents.Id; "Description" = $lorem} -ContentType "Item"

# Level 3
$finance = Add-PnPListItem -List $listNameLevel3 -Values @{"Title" = "Finance"; "SortOrder" = 1; "Url" = "/"; "OpenInNewTab" = "No"; "Level2Item" = $corporate.Id; "Description" = $lorem} -ContentType "Item"

write-host "done." -ForegroundColor Green