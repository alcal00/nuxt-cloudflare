# pricing ref

## collaborative price editing/preview


Quick link : [https://philippe.paxpar.tech/pricing?preview=true&url=https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx](https://philippe.paxpar.tech/pricing?preview=true&url=https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx) to edit first sheet


Quick link : [https://philippe.paxpar.tech/pricing?preview=true&url=https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx&sheet_name=2](https://philippe.paxpar.tech/pricing?preview=true&url=https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx&sheet_name=2) to edit the third sheet

Share an Excel spreadsheet in nextcloud and get [its share link](https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T).
It should look like `https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T`.

From the previous link get the [download link](https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx).
It should look like `https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx`.

Ensure the download link correctly get the Excel file from an anonymous browser.


## pricing endpoints

* GET `/api/ref/file/common/_public/{domain}/pricing.json` : get the current pricing in JSON format for the domain.
  This endpoint is called by the pricing front page.
* GET `/api/ref/pricing/convert?url=xxx` : get the pricing preview in JSON formet from the excel def at url.
  This alternate endpoint is used to convert an Excel pricing table to its JSON version.
  The output may later be [stored](#pricing-ref-storage) when validated.
* page `/front/pricing` : get the current pricing page for the domain.
  This is the page where the current pricing table is displayed.
* page `/front/pricing?preview` : ask for the url to get the pricing preview page.
  When the url is given, go to the next page
* page `/front/pricing?preview&url=xxx` : get the pricing preview page from the excel def at url
  The page displays temporary version of the pricing table.
  This is usefull to preview the next version of the pricing table.
  This URL can be bookmarked !

## Excel source

To ease the pricing table editing, you can use [this Excel template](pricing_sample.xlsx).


## pricing ref storage

The pricing table is stored in JSON format in
`pp-ref-common/_public/{domain}/pricing.json`.

If there is no princing for the given domain the `default` domain will be used.

## JSON format


!!! todo
    There is JSON schema yet for the pricing table

Here is a sample pricing ref in JSON format :

```json
--8<-- "ref/pricing/pricing_sample.json"
```

## Tooltip

Add the tooltip text after '??:'.

So `European storage ??: Exclusive use of GDPR european storage provider`

## sheet_name

Add `sheet_name` query param to target a different sheet (default is 0 : the first one).

Same as [pandas.read_excel](https://pandas.pydata.org/docs/reference/api/pandas.read_excel.html#pandas-read-excel)

Example : [https://philippe.paxpar.tech/pricing?preview=true&url=https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx&sheet_name=2](https://philippe.paxpar.tech/pricing?preview=true&url=https://paxpar.tech/nuage/s/EJrz5Mpw45E5x5T/download/tarifs_paxpar_saas.xlsx&sheet_name=2)

## optional msg

If a `msg' key with a `icon` and `msg` content is present.
A message is shown a the top of the price table.
