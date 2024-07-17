# perm ref


* `API_CHECK` : all API to check a PDF
* `API_CONV` : all API to convert document
* `API_CRAFT` : all API to craft a PDF
* `API_SIGN` : all API to sign a PDF
* `CHECK` : allowed to check a PDF 
* `CRAFT_FILL`
* `CRAFT_FINALIZE`
* `CRAFT_PREVIEW`
* `CRAFT_TEMPLATE` : allowed to drop a custom template
* `FORGE`
* `FRONT_CONTENT_DOCS_AUTHOR`
* `FRONT_CONTENT_DOCS_HOST`
* `FRONT_CONTENT_DOCS_TEAM`
* `FRONT_CONTENT_DOCS_USER`
* `FRONT_CONTENT_DOCS`
* `FRONT_CONTENT_PRIV`
* `FRONT_CONTENT`
* `GOD` : allow all (for dev purpose)
* `MODULE_FEC` : allow module for FEC file (check and craft)

## TODO

* perm `CUSTOM_DOMAIN:chambersign.fr` allow API calls CORS from this domain
* perm `API_RATE_LIMIT:5/1` allow 5 API calls per second
* perm `API_RATE_BURST:100/10` allow 100 API burst calls in 10 seconds
