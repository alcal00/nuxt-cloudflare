# conv paxpar service

The paxpar conv service is bases on [gotenberg](https://github.com/gotenberg/gotenberg).

We currently use the 6.x version and plan to move to the 7.x version
when [#2391](https://gitlab.com/arundo-tech/paxpar/-/issues/2391) wil be fixed.


## examples

A call to the service thru portal service : It works :

```
curl \
--request POST 'https://philippe.qdoc.pro/forms/libreoffice/convert' \
--form 'files=@"hello.docx"' \
--form 'files=@"hello.docx"' \
--form 'merge="true"' \
-o my.pdf
```


A call to the service (bypassing portal service) : it works :

```
curl \
--request POST 'http://[2a01:4f9:2a:25d5::17]:3010/forms/libreoffice/convert' \
--form 'files=@"hello.docx"' \
--form 'files=@"hello.docx"' \
--form 'merge="true"' \
-o my.pdf
```
