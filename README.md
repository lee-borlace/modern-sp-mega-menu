# modern-sp-mega-menu

## Introduction

See [here](https://dev.office.com/sharepoint/docs/spfx/extensions/overview-extensions) for all info about getting SPFX extensions up and running e.g. toolchain, deploying to CDN etc.


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
- I'm not a UX person or a designer - I haven't maximised the pretiness quotient in this sample.

## How it works
