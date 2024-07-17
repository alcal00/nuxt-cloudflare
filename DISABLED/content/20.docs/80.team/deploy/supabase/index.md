# supabase storage

do not We use any public bucket at this time.

We may use some public token this way :

All assets under `/static/` will be included in the front image at build time.

For example this [/static/conf.json](https://iwbykurftghnypkfinme.supabase.co/storage/v1/object/public/front-public/static/conf.json)
will be included at build time and accessible at https://ng.dev.paxpar.tech/conf.json


It is also accessible at this public URL : https://iwbykurftghnypkfinme.supabase.co/storage/v1/object/public/front-public/static/conf.json


## schema migration

```shell
export SUPABASE_PROJECT_REF=cgsszvazemkfneqlgpkb
npx supabase login
#npx supabase link --project-ref eiazjrfkvoeghuivvfau
npx supabase link --project-ref $SUPABASE_PROJECT_REF
npx supabase db pull
```

## function

```shell
npx supabase login
npx supabase link --project-ref $SUPABASE_PROJECT_REF
npx supabase functions deploy
npx supabase functions deploy on-lemon-webhook

```