# Storage

The paxpar stateless services need to store persistant data in thoses cases :

* checklist definition (S3_REF)
* craft form definition (S3_REF)
* web session storage (S3_SESSION)
* user profile (postgresql)
* user PDF files (S3 conf per user/company)
* forge files (S3 conf per user/company)

## service core sync

![](storage.svg)


## misc


```yaml
server: https://cdch1uat.s3.fr-par.scw.cloud
secure: true
access_key: str
secret_key: str
bucket: cdch1uat
#create_bucket: bool = True
```

## Editor

vscode or vscodium

With extensions.

Experience to include an IDE for editing yaml/json files.

Should be able to browse an S3 bucket with [vscode-remote-workspace](https://github.com/mkloubert/vscode-remote-workspace).

Implementing vscode [FileSystemProvider](https://code.visualstudio.com/api/references/vscode-api#FileSystemProvider)

See [run-vscode-in-browser-in-a-single-command](https://dev.to/bias/run-vscode-in-browser-in-a-single-command-24mi).



```
s3://values@uat-devperf/?params=s3devperf.json
s3://shared@uat-devperf/
s3://[credential_type@]bucket[/path/to/file/or/folder][?param1=value1&param2=value2]

"uri": "webdav://myUser:myPassword@webdav.example.com/?values=my_values.json&ssl=${SSL}&encoding=${ENC}&binEncoding=${ENC}&fooParam=${FOO}",
```

https://docs.aws.amazon.com/credref/latest/refdocs/file-format.html

https://www.scaleway.com/en/docs/object-storage-with-aws-cli/

## Forge

The forge jupyter notebook server store its files on a S3 bucket.

[s3contents extension](https://github.com/danielfrg/s3contents)
