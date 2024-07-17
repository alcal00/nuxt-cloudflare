# core-ref service

API calls to access the ref files.

To access user session files, use [core-filemanager](../filemanager/index.md).

For example, a file located in `pp-ref-common` at
`/_public/philippe.paxpar.tech/logo.svg`
is accessible with `/api/ref/file/_public/philippe.paxpar.tech/logo.svg`.

You must be authenticated to access the file.


## public files

To access file without authentication there is the API endpoint
`/api/ref/public/file/{path}`.

To prevent unauthorized access to sensible files.
The `path` **must** contain `public/`.

So any file without `public/` in its path will never be publicly accessible.

Examples :
* `/api/ref/public/file/common/_public/philippe.paxpar.tech/logo.svg`
* `/api/ref/public/file/common/facturx/tax/assets/cockpilab.png`

## path substitution

In some case, you want the same path points to different assert
depending on the domain.

For example, those 2 URL :

* https://philippe.paxpar.tech/api/ref/public/file/common/_public/%7Bdomain%7D/logo.svg
* https://philippe.qdoc.pro/api/ref/public/file/common/_public/%7Bdomain%7D/logo.svg

points to the same paxpar instance at the same path  `/api/ref/public/file/common/_public/{domain}/logo.svg`.

The returned asset will be :
* `_public/philippe.paxpar.tech/logo.svg` from the first URL
* `_public/philippe.qdoc.pro/logo.svg` from the second URL
