# vscode use

How to use vscode/vscodium with paxpar ?

## S3 buckets

This will allow to access S3 bucket content directly in vscode file browser.

Install vs code extension `Remote Workspace`.

Create a file `~/.aws/credentials` with this content :
```
[paxpar]
aws_access_key_id = SCWWRV5NK0V2DYH1RA5J
aws_secret_access_key = XXXXXXX
region = fr-par

[paxpar_dev]
aws_access_key_id = SCWKR6JJDJKD67ACRNS8
aws_secret_access_key = XXXXXXX
region = fr-par
```
Replace the `XXXXXXX` with your real secrets.


Create a file in your own separate projet called `my.code-workspace` (outside of .aws) with this content :
```json
{
    "folders": [
        {
            "uri": "s3://shared@uat-devperf/?debug=1&profile=devperf&endpoint=http%3A%2F%2Fs3.fr-par.scw.cloud",
            "name": "devperf S3 bucket"
        },
        {
            "uri": "s3://shared@cdch1uat/?debug=1&profile=paxpar&endpoint=http%3A%2F%2Fs3.fr-par.scw.cloud",
            "name": "paxpar S3 bucket"
        },
        {
            "uri": "s3://shared@uat-devperf/?debug=1&profile=arty&endpoint=http%3A%2F%2Fs3.fr-par.scw.cloud",
            "name": "arty S3 bucket"
        },
        {
            "uri": "sftp://bob:secret@localhost",
            "name": "SFTP localhost"
        },
        {
            "path": "."
        }
    ]
}
```

For each S3 bucket set the `uri` with :
```
s3://shared@{BUCKET}/?debug=1&profile={PROFILE}&endpoint={ENDPOINT}
```

* Replace {BUCKET} with the bucket id
* Replace {PROFILE} with the progile name (INI section)
* Replace {ENDPOINT} with `http%3A%2F%2Fs3.fr-par.scw.cloud`

Now you can open this workplace in vscode and the S3 buckets content.

## S3 buckets with s3fs

```shell
apt install s3fs

mkdir ~/pp-ref-common

# le fichier ~/.aws/credentials est le même que pour l'extension vscode

s3fs pp-ref-common \
	/home/philippe/pp-ref-common \
	-o profile=paxpar \
	-o use_path_request_style \
	-o endpoint=fr-par \
	-o parallel_count=15 \
	-o multipart_size=5 \
	-o nocopyapi \
	-o url=https://s3.fr-par.scw.cloud
``̀

or in /etc/fstab :

```
s3fs#pp-ref-common /home/philippe/pp-ref-common fuse _netdev,allow_other,use_path_request_style,url=https://s3.fr-par.scw.cloud/ 0 0
```

