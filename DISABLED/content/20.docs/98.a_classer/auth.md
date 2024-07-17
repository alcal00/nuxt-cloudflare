# Authorization


supabase ...
 
See [`/login` page](/docs/pages/login).

See [`/debug/auth` page](/debug/auth).

Inspired by this [demo](https://github.com/nuxt-modules/supabase/tree/main/demo)


## JWT payload

Extra payload added to a user JWT token

https://github.com/supabase/supabase/discussions/1148

https://postgrest.org/en/stable/configuration.html#jwt-role-claim-key


Sample JWT payload (YAML syntax) :
```yaml
aud: authenticated
exp: 1687102929
sub: b3494685-a8bc-43b2-a7fb-a5eddf312fbc
email: philippe.entzmann+twin@gmail.com
phone: ""
app_metadata:
  provider: email
  providers:
    - email
user_metadata: {}
role: authenticated
aal: aal1
amr:
  - method: otp
    timestamp: 1686042964
session_id: 3019d299-a7cd-47fe-a082-2cc486ea5d65
```

```yaml
pp:
    domain: textile.document.legal
    roles:
    - domain: textile.document.legal
      role: author
    - domain: veriftondoc.fr
      role: admin
```

## magic email


## auh providers

* [github auth](https://supabase.com/docs/guides/auth/social-login/auth-github)

## auth workflow


The user from the main page `/` click to access the protected page `/check`.
The front supabase middleware intercept it and redirect to the `/login` page.
When the user provides its email and click the login button, a supabase API is called.
Supabase send an email with a magic link to the user.
later when the authentication is done (on another browser tab), the supabase midleware recieve a confirmation event.

Sequence window for the original browser tab :

::ppw-mermaid
---
def: |
    sequenceDiagram
        participant welcome as Front /
        participant check as Front /check
        participant login as Front /login
        participant supabase as Supabase
        participant mail as mail
        participant API as paxpar API

        welcome->>check: click check link
        check->>login: auth intercept
        login->>supabase: API call
        supabase->>mail: send email
        Note right of supabase: when authenticated
        supabase->>login: event auth OK
        login->>check: redirect to /check
---
::


Sequence window for the second browser tab open by the email link :

::ppw-mermaid
---
def: |
    sequenceDiagram
        participant welcome as Front /
        participant check as Front /check
        participant login as Front /login
        participant supabase as Supabase
        participant mail as mail
        participant API as paxpar API

        
        Note right of supabase: recieving email
        mail->>supabase: click email link
        supabase->>welcome: redirect by supabase<br/>query param redirect w/ full URL
        welcome->>check: navigateTo() from pp auth middleware
---
::

## supabase conf uat/dev

* Site URL : `https://paxpar.tech/api/auth/redirect`
* Redirect URLs `https://**`

## supabase conf prod

* Site URL : `https://dev.paxpar.tech/api/auth/redirect`
* Redirect URLs `https://**,http://**`

Authorized domains will be filtered in `/api/auth/redirect`.

## sync pp_user_plans / auth.user

trigger ...

## misc

## TODO

* /api/perm/user POST
* /api/perm/user GET
* table lemon_subscriptions -> pp_user_plans
* trigger on pp_user_plans to update auth.user
