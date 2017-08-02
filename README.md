# modern-sp-mega-menu

## Introduction

See [here](https://dev.office.com/sharepoint/docs/spfx/extensions/overview-extensions) for all info about getting SPFX extensions up and running e.g. toolchain, deploying to CDN etc.

## Configuring SPO for Mega Menu
The mega menu is driven by 3 lists in the root of the site collection. These define level 1, 2 and 3 items respectively. Level 2 items look up to level 1 items, and level 3 items look up to level 2 items.

The script *provisioning\create-lists.ps1* creates the 3 required lists at the root site of the site collection, and populates with initial sample data. Note this requires PnP Powershell module to be installed. See [here](https://github.com/SharePoint/PnP-PowerShell).

Usage :

```powershell
.\create-lists.ps1 -siteCollectionUrl <site collection root URL>
```

## Packaging and running locally

1. `gulp bundle`
2. `gulp package-solution`
3. `gulp serve --nobrowser`
4. Upload to app catalog

## Packaging and running from CDN

1. `gulp bundle --ship`
2. `gulp package-solution --ship`
3. Re-upload solution to app store.
4. Manually upload the files from temp/deploy to the CDN folder created previously 

## Some limitations
- At this pre-release point, SPFX extensions seem to be intermittent in their ability to find particular page placeholders. If it is consistently failing to find the header placeholder (see console), try hard refreshing the page in the browser, or opening the same page in a new tab.
- The components use the Fabric UI theme classes e.g. `ms-bgColor-themePrimary`. These seem to behave inconsistently on my tenant - they will sometimes use my configured theme, but sometimes will default to the grey theme. Your results may vary.
- Due to current SPFX limitations, you must install the app to any sites you want it to take effect on. Hopefully in future it will be possible to deploy once to an entire site collection.
- I'm not a UX person or a designer - I haven't maximised the pretiness quotient in this sample.

## How it works
