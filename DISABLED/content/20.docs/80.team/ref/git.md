# git repo

The `pp-ref-common` is store in a S3 bucket.

This bucket is synced in a git repo.
The main [git remote if on gitlab](https://gitlab.com/arundo-tech/pp-ref-common).


In a paxpar instance `/ref/common` is a folder that is synced with the S3 bucket.

In a dev environement `/ref/common` is a folder :

* that is the git repo
* that is git ignored from the parent project
* that could be sync with the S3 bucket (except the `.git` folder)


## S3 sync

rclone ls pprefprod:pp-ref-common --filter-from filter-rclone.txt | wc
`filter-rclone.txt` contains the patterns of files/folders that will be included/excluded
in a s3 sync.

!!! TODO
    Don't do a sync be start with an empty cache 
    and fetch only the needed files on first query
