# Billing

* [stripe integration](stripe_integration.md)

## rationale

```mermaid
sequenceDiagram
    actor user
    participant front
    participant stripe
    participant ppapi
    participant supabase

    %% ------------------------------------------------------------
    Note over user,supabase: Initial subscription and payment
    %% ------------------------------------------------------------
    user ->> front: initial subscription
    front ->> ppapi: 
    stripe ->> ppapi: first payment ok
    ppapi ->> supabase: credit++
    supabase ->> front: payment OK / RT / refresh token

    %% ------------------------------------------------------------
    Note over user,supabase: Recurring payment
    %% ------------------------------------------------------------
    loop Every month
      stripe ->> ppapi: next payment ok
      ppapi ->> supabase: credit++
      supabase ->> front: payment OK / RT / refresh token
    end

    %% ------------------------------------------------------------
    Note over user,supabase: User status refresh job
    %% ------------------------------------------------------------
    loop Every day
      supabase ->> ppapi: daily CRON
      ppapi ->> supabase: disable user
      supabase ->> front: disable user / RT / refresh token
    end
```

pseudo-code (probably supabase function) :

```
# Recurring payment (called by stripe webhook)
# PP API endpoint (or supabase function) : /api/checkout/user/payment
def users_payment():
    # update the expire_date
    # set the expired flag to false
    ...

# User status refresh job (cron job)
# supabase function : on-billing-update
def users_status_refresh():
    # find users whose plans expire
    # clear the user token meta
    # set the expired flag
    ...

```

```mermaid
sequenceDiagram
    actor User as User browser

    autonumber
    User->>nuxt: vitrine
    activate nuxt
    User->>nuxt: /pricing
    User->>nuxt: /checkout?price_id=price_xxx
    nuxt->>nuxt: see login diagram
    nuxt->>+fastapi: POST /api/checkout/session?price_id=price_xxx
    fastapi->>Stripe: create checkout session
    fastapi->>-nuxt: redirect to Stripe
    nuxt->>+User: redirect to Stripe
    deactivate nuxt

    rect rgba(200, 0, 0, .1)
    note right of nuxt: Stripe checkout

        User->>-Stripe: redirect to stripe checkout
        activate Stripe
        User->>Stripe: card numbers
        User->>Stripe: address and other infos
        Stripe->>Stripe: check and pay
        Stripe->>+User: redirect to /api/checkout/success callback
        deactivate Stripe

    end

    User->>-fastapi: redirect to /api/checkout/success
    activate fastapi
    fastapi->>postgre: update user info
    fastapi->>+User: redirect to /checkout/success
    deactivate fastapi
    User->>-nuxt: redirect to /checkout/success
    nuxt->>nuxt: go to initial target

    rect rgba(200, 0, 0, .1)
    note right of fastapi: later Stripe webhook

        Stripe->>+fastapi: /api/checkout/webhook
        fastapi->>-postgre: update user info (if not)

    end
```


## journal

PG_NET extension activated

PG_CRON extension activated

supabase [functions for stripe](https://supabase.com/docs/guides/functions/examples/stripe-webhooks) webhooks: 
* on-stripe-webhook
* on-billing-update

FIX: Change port 54324 to 54444 in supabase/config.toml

docker desktop fix in case of supabase error :

```shell
systemctl --user start docker-desktop
sudo ln -s ~/.docker/desktop/docker.sock  /var/run/docker.sock
cd ~/src/paxpaar
npx supabase start # start the supabase stack
npx supabase functions serve --env-file ./supabase/.env # start the Functions watcher


# deploy
npx supabase functions deploy

# migration : see https://supabase.com/docs/guides/cli/managing-environments
# new migration point from local db changes
npx supabase db diff -f subscriptions

# fetch remote db schema changes
npx supabase db remote commit
# reset db and apply migrations
npx supabase db reset
# push migrations
npx supabase db push
```

call a function : 
```shell
# call hello-world
curl --request POST 'http://localhost:54321/functions/v1/hello-world' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{ "name":"Functions" }'

# call on-stripe-webhook
curl --request POST 'http://localhost:54321/functions/v1/on-stripe-webhook' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{ "name":"Functions" }'

curl --request POST 'http://localhost:54321/functions/v1/token' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json' \
  --data '{ "name": "mykey1", "expiry":"2023-08-15" }'

curl --request POST 'http://localhost:54321/functions/v1/on-billing-update' \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
  --header 'Content-Type: application/json'
```

Set env vars as [secret for production](https://supabase.com/docs/guides/functions/secrets#production-secrets) :
```
npx supabase secrets set --env-file ./supabase/.env
npx supabase secrets set JWT_SECRET="xxxxx"
npx supabase secrets set LEMON_API_KEY="xxxxx"
npx supabase secrets set LEMON_API_KEY_TEST="xxxxx"
npx supabase secrets list

```

## token payload

```yaml
perms: 
  - domain: textile.document.legal
    plan: BASIC
    options: ["POOL", "NAG20"]
  - domain: paxpar.tech
    plan: EXT2

```



## TODO

* supbase functions new myfct1
* pg-net + pb_cron extension
* see supabase + stripe
* supbase rate limit
* supbase CLI + docker desktop
* stripe CLI
* supabase secrets

## misc

* [Scheduling Edge Functions](https://www.youtube.com/watch?v=-U6DJcjVvGo&t=125s)
* [supabase : getting SaaS-y with stripe](https://www.youtube.com/watch?v=IJoc6dKy03c&list=PL5S4mPUpp4OvS_lW6OGX2NTiQ_AHAQ3t-)
* [supabase + podman](https://dev.to/zakariachahboun/supabase-self-hosting-with-podman-1mhl)
* https://github.com/supabase/cli/issues/265