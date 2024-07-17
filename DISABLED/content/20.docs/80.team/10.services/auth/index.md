# auth core service

![](auth.drawio.svg)

Sequence diagram for a new user subscription :


!!! important
    The following sequence diagram is outdated !!

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

!!! important
    The following sequence diagram is outdated !!


Sequence diagram for the auth/login steps :

```mermaid
sequenceDiagram
    User->>nuxt: to a protected page
    nuxt->>nuxt: /front/login?redirect=xxx
    nuxt->>Magic: login req
    Magic->>User: email
    nuxt->>nuxt: wait
    User->>Magic: click email
    Magic->>nuxt: confirmation
    nuxt->>fastapi: /api/auth/login
    fastapi->>postgre: user info
    postgre->>fastapi: user info
    fastapi->>nuxt: redirect to xxx
```


!!! important
    The following sequence diagram is outdated !!


Sequence diagram for a subscription of a new user :

```mermaid
sequenceDiagram
    User->>hugo: vitrine
    User->>hugo: offre tarif
    hugo->>nuxt: /front/checkout
    nuxt->>nuxt: /front/login
    User->>nuxt: email
    nuxt->>Magic: login req
    Magic->>User: email
    nuxt->>nuxt: wait
    User->>Magic: click email
    Magic->>nuxt: confirmation
    nuxt->>fastapi: /api/auth/login
    fastapi->>postgre: user info
    postgre->>fastapi: user info
    fastapi->>nuxt: user info
    nuxt->>fastapi: /api/checkout/create-session ??
    nuxt->>Stripe: stripe/pay
    User->>Stripe: card numbers
    Stripe->>Stripe: check and pay
    Stripe->>nuxt: checkout/sucess
    Stripe->>fastapi: /api/checkout/webhook
    fastapi->>postgre: update user info
```

## URL sequence v3

## URL sequence v2

URL sequence (with examples from `dev17.paxpar.tech` instance):

* `site` : page containing prices

    https://dev17.paxpar.tech/site#pricing

* `buy.stripe.com` : stripe paymentlink a given product/price/plan

    https://buy.stripe.com/test_5kAbMr51h3Ba6T6aEG

* `api/checkout/session` : stripe payment link callback, register plan and redirect

    https://dev17.paxpar.tech/api/checkout/session/{CHECKOUT_SESSION_ID}


* `front/login` : redirection to login page with email and autologin

    inner API calls to `POST /api/auth/login` and `GET /api/auth/me`

    https://dev17.paxpar.tech/front/login?email=...&redirect=/front/checkout/success?auto


* `front/checkout/success` : redirect made by auto login

    https://dev17.paxpar.tech/front/checkout/success


## URL sequence v1

URL sequence (with examples from `dev.document.legal` and `dev17.paxpar.tech` instances):

* `site` : page containing prices

    https://dev17.paxpar.tech/site

* `front/checkout` : checkout page for a given product/price/plan

    https://dev17.paxpar.tech/front/checkout?productId=price_1J2tgBFvDsHBMRpKoR0jcqKn

    https://dev.document.legal/front/checkout?productId=price_1HKkwbFvDsHBMRpKSsl1TapG

* `front/login` : redirection to login page made by auth navigation guard

    inner API calls to `POST /api/auth/login` and `GET /api/auth/me`

    https://dev17.paxpar.tech/front/login

    https://dev.document.legal/front/login

* `front/checkout` : create session and redirect to stripe

    inner API call to `POST /api/checkout/create-session`

* `stripe/pay` : redirection to stripe page made by `/front/checkout` page

    inner API call (webhook) to  ` POST /api/checkout/webhook`

    https://checkout.stripe.com/pay/cs_test_a1jzk2uNwmOWtQfkvZIOCYqfNFxw1kE5YfD2O4cAsPqTv7WIIPTSw9ICXi#fidkdWxOYHwnPyd1blpxYHZxWk9PbWF9fEZXT2AyQHJKalRwRlU2bnY2TzU1XWpRdF9BU2EnKSdobGF2Jz9%2BJ2JwbGEnPyc2YDxmZ2A1YSg0ZmE0KDEzMTIoZDBgNihgYGAzZjZhNjc8YTcyNT1kMjYnKSdocGxhJz8nNjA9NTJhYWQoZ2A1NygxM2M1KGQ0NDIoYzxnYDAzYTRjNjMxMzFjPTQ2JykndmxhJz8nN2A8YzxnMGMoMzcxNSgxYDVkKDwxZmMoNjVjYzdgZDxmYzQ3PDM3Zz1jJ3gpJ2dgcWR2Jz9eWCknaWR8anBxUXx1YCc%2FJ3Zsa2JpYFpscWBoJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmFgczQyK3VkfXVkdytxYGZtJ3gl

    https://checkout.stripe.com/pay/cs_test_a1M9i9xO64fBhXEFjzOfYJveBUlzROAtbYrXk1ep7CIWNGxYe2rY7Mnhyt#fidkdWxOYHwnPyd1blpxYHZxWk9PbWF9fEZXT2AyQHJKalRwRlU2bnY2TzU1XWpRdF9BU2EnKSdobGF2Jz9%2BJ2JwbGEnPydLRCcpJ2hwbGEnPydLRCcpJ3ZsYSc%2FJ0tEJ3gpJ2dgcWR2Jz9eWCknaWR8anBxUXx1YCc%2FJ3Zsa2JpYFpscWBoJyknd2BjYHd3YHdKd2xibGsnPydtcXF1dj8qKmFgcythamZwaGBrcStpYGJkaSd4JSUl

* `front/checkout/success` : redirect made by stripe

    https://dev17.paxpar.tech/front/checkout/success?session_id=cs_test_a1jzk2uNwmOWtQfkvZIOCYqfNFxw1kE5YfD2O4cAsPqTv7WIIPTSw9ICXi

    https://dev.document.legal/front/checkout/success?session_id=cs_test_a1M9i9xO64fBhXEFjzOfYJveBUlzROAtbYrXk1ep7CIWNGxYe2rY7Mnhyt


## obsolete ??

To generate a password hash :
```
>>> from passlib.context import CryptContext
>>> pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
>>> password = "Hello"
>>> pwd_context.hash(password)
'$2b$12$Pse3ooN4zO8Rl8Y4EA7l9OnrAR1/GKHkME/YQr3kJXGRxKx.01QnG'
>>> pwd_context.hash(password)
'$2b$12$QiJOoROc4Utyp7jEvN4vSecGum6RliIwA80eewrO1flo/VGq4jP5C'
>>> pwd_context.hash(password)
'$2b$12$z/l6OHJwTk/Taft3faPS9OmlhBkbSC9/W4uJms7OMtdAB0UNspX.y'
>>>
```

TODO :
* [ ] implement DELETE /api/auth/password/reset
* [ ] implement POST /api/auth/password/change
* [ ] vuetify form for login
* [ ] vuetify form for register
* [ ] register behaviour (mail)
* [ ] notification component
* [ ] nuxt publicurl/basepath
* [ ] test token renew
* [ ] integrate in portal (caddy)

## local dev session


```shell
# set portal as a full TLS webserver
export PORTAL_MAIN_MODE=tls
# set auth proxy to localhost
export SVC_AUTH_PROXY=localhost
# set front service to  proxy at localhost
export SVC_FRONT_MODE=proxy
export SVC_FRONT_PROXY=localhost
# start portal service
make dev-portal
# start front service in another term
make dev-front
# start auth proxy in another term
make dev-auth
```


## misc

To run a script
```
cd services/auth
PYTHONPATH=../.. poetry run python -m services.auth.dbrun
PYTHONPATH=../.. poetry run python -m services.auth.dbrun2
PYTHONPATH=../.. poetry run python -m services.auth.stripe_sample
```

## pg admin

use [pgadmin docker image](https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html) :
```
docker pull dpage/pgadmin4
docker run -p 80:80 \
    -e 'PGADMIN_DEFAULT_EMAIL=info@paxpar.tech' \
    -e 'PGADMIN_DEFAULT_PASSWORD=xxxx' \
    -d dpage/pgadmin4
```

## JWT token

We use the RS256 algorithm with a key pair.

```
ssh-keygen -t rsa -b 2048 -f mykey
openssl rsa -in mykey -pubout -outform PEM -out mykey.pub
cat mykey
cat mykey.pub
```

```
from jose import jwt, jwk

key = jwk.JWK.generate(kty='RSA', size=2048, alg='RSA-OAEP-256', use='enc', kid='12345')
public_key = key.export_public()
private_key = key.export_private()



PRIVATE_KEY = '''-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn
NhAAAAAwEAAQAAAQEA0Bwae/G6a/SasBVpRjfOyzCsRec7F8HMts4rO++wHJISr7nsZf7C
qJfZyCB4xjQa17tdppLB8vxVJnVE5T2qWf2rcyLr3tmQ0SrPmPZzhWxLD8V9ZI/dk1Uh0q
qhtz1yaCJftmf3v0umnDteYvnB6Crwkk07Jos2bUCz0+b88B8M1mlV+sFgjr1cmq6Ywa0c
PEP28O5ZnZo+d/lXr4YazCOsOZ1mWdWRjhy/cKwoi2W7pnxaz8+sp03zcpzedblWeph+Yw
rx+IeXkCuxTcKE7POvxZyQCXDpWMRD/q0GO6QTIR1L4Opqb5NiqiVO7P0RGMgivtMAaI1S
G4lQHNiRLQAAA9AashyhGrIcoQAAAAdzc2gtcnNhAAABAQDQHBp78bpr9JqwFWlGN87LMK
xF5zsXwcy2zis777AckhKvuexl/sKol9nIIHjGNBrXu12mksHy/FUmdUTlPapZ/atzIuve
2ZDRKs+Y9nOFbEsPxX1kj92TVSHSqqG3PXJoIl+2Z/e/S6acO15i+cHoKvCSTTsmizZtQL
PT5vzwHwzWaVX6wWCOvVyarpjBrRw8Q/bw7lmdmj53+VevhhrMI6w5nWZZ1ZGOHL9wrCiL
ZbumfFrPz6ynTfNynN51uVZ6mH5jCvH4h5eQK7FNwoTs86/FnJAJcOlYxEP+rQY7pBMhHU
vg6mpvk2KqJU7s/REYyCK+0wBojVIbiVAc2JEtAAAAAwEAAQAAAQBbc/4veYry5gsUVlRt
BxlZMYqDLZpKVmAf9XoKXMqHw6lyj8HTEKF6dUC/MYXhlAQ3yZ7eFKAmp7zDqcUc+HxkD5
XIgxAkXnfFc4rHLYaWm4Bg7eisyIwWstKqQVHPtLESEgj9n7K/3f7ZqT1RQXB1Fmmh4U6d
IZBJcqWT+W4uFqsvRyhW3BRgFxMyWP/86HwNdQtti6L94D9M4DT66ucc3FTqknHZYWc0HA
ymX8ACH5QfeVTwQcDhftRX75Hyzw5E9ba4lzxRvQEjhbesmDf0AsTOxnyIpqFojUChbnNg
bY8ZWa98LfFiziExy46rtjBV4a5V8dcsqPoqzKN/Iy4BAAAAgEw0eOLX6MPE70Ni0N/iAM
3qoiKPLMdOoVytlWCFRELor2UbzbSFUMcuCkGOJAVBzFK1vC5DFiaX3UbZ4JAetPPUxfMi
X0nPfaOSQR18obepsxy8jQgCzEd+n/ExJDRMxVsWGb4uE8lWKMA7WjbxakaZ3w6Jky+18l
58gj68RGGOAAAAgQD+7oV2mPQ0/XMpsr+BEZz/zMBP9QW+zmnKa7iHXpFfZ4dHSelCURug
TiZfvDWZnaPk3ViCvXpzH19I4MYjg3RiSKckihJKqnTawLZLakeas54aL/nsv0wevWjGoB
KKKg48Xc4xg9wFbH1dBp5TvUoBT4ZKZlLpznzAuD0HgA6hHwAAAIEA0Ptaj3iEiXffXFnj
RG9rMiSNq8vqu7hnqR9QueNyJ2mzRrlPMd3jd1EACcf6xKwN31PUTXZBchtG7zPv9TyAG9
bimSbI9ydytkNzcxg+21L7Md99jz50D+BY2R1U5S5OTisNmitNIt9AFZF+cZfDT2T4/WXe
H27T66pZPbLqiDMAAAAZcm9vdEBzY3ctaW5zcGlyaW5nLWhvb3ZlcgEC
-----END OPENSSH PRIVATE KEY-----
'''
token = jwt.encode({'a': 'b'}, PRIVATE_KEY, algorithm='RS256')
```


OBSOLETE (for HS256) :

Generate the JWT secret :
```
openssl rand -hex 32
```

# TODO

TODO: login failed dialog when login API is not 200

TODO: login failed dialog when /auth/me API is not 200

TODO: call /api/auth/logout on logout (move magic logout from front to back)


# Authentication misc

Authentication is based en JWT tokens.

## User authentication

The user give its credentials (email/password).
When it is verified a token is forged.


## JWT token

Expire at a time delta of `conf.JWT_ACCESS_TOKEN_EXPIRE_MINUTES`.

Sample payload (`auth.models.TokenAccessPayload`) :
```yaml
email: bob@acme.com
domain:  uat.paxpar.tech
plans:
    - planA
    - planB
roles:
    planA:
        - role11
        - role2
    planB:
        - role11
        - role5
        - role7
```

Sample token :

```
token='WyIweGNhZmYyYzNlZGVhMzQwMjZhMjkyMzlmZGU5OGNmOGMyZDA5YTQzNGUyMDQzOTAyYTU5N2FmMGFlMjljYWFiMTQ3MTcyZGNlM2Y3MzJkMjVlMGU5MWI4YjQ4OTMwYWYyYmMxZTU2NDEyZjY4NmJmMzhmMjRlMjdhMGEzYzQ5ZDRlMWMiLCJ7XCJpYXRcIjoxNjIxNjQyNzQyLFwiZXh0XCI6MTYyMTY0MzY0MixcImlzc1wiOlwiZGlkOmV0aHI6MHgzMzY1Qjc2MjY3YzU1RkNCMDA0ZDhhMWI4NzkwZjY0MTQ5NzY5OUNkXCIsXCJzdWJcIjpcIlI2c2twbXBFaWMwdXowSENkempvUDBXS3lDZjhsRWxjbW1wY3hqNVJjZlE9XCIsXCJhdWRcIjpcIjgyMm5TWWxvSVl1ZXpYeWFSVzFmR0Jsb0Q3V2xWakluT3kzZkQ0ZFFZRUk9XCIsXCJuYmZcIjoxNjIxNjQyNzQyLFwidGlkXCI6XCJiOTA1OGIxNi1iZDVkLTQ0ZTUtOTQ0Yy1iODdhODI5ZjMwZjBcIixcImFkZFwiOlwiMHg2OGM5NDc2YjBjMjc5ZmM0OGJjMjA5NWU2NTQxODAwOGE5YTZhYWQyMGZiODU5MTJhNmZmODZmYzk1NGNlNzc5NGUyMWUwYjJlZDM0NTdiOTEzNzliMTJhM2EwOTJjY2UxYWNiYTBkODViZWE1YmQzNjQ2MjVkOTliYzZkNThkNzFjXCJ9Il0='
```

!!! important
    This token revocation is not implemented yet !

## JWT refresh token

Expire at a time delta of `conf.JWT_REFRESH_TOKEN_EXPIRE_DAYS`.

Sample payload :
```yaml
email: bob@acme.com
domain: uat.paxpar.tech
type: refresh
id: 0084c018-e7d9-489b-9a3c-d40f72b3858c
```

`id` is a standard uuid4.

!!! important
    This refresh token revocation is not implemented yet !

## Service authentication

Requests between services are alos protected by JWT tokens.

Each client service need to be authenticated to get a valid token.

## Service privilege escalation

Use case :
an API call from an unprivileged account need in turn to call
a more privileged API.

In this case we need a new token with more privileges (scopes) by escalating it.

The API call is [/api/auth/token/escalate](/api/docs#/auth/token_esclation_api_auth_token_escalate_post).

## Service impersonation

Use case :
an API call from an admin account that need in turn to call
an API as a user.

In this case we need to [impersonate the JWT token](https://stackoverflow.com/questions/41747705/impersonation-using-jwt).

The API call is [/api/auth/token/impersonate](/api/docs#/auth/token_esclation_api_auth_token_impersonate_post).

## Roles and scopes

* me : Everything about me (the current user)
* admin : Everything about all users and reference objects
* api.core.auth :
* api.core.auth.escalation
* api.core.auth.impersonation
* api.core.check
* api.core.craft
* api.core.sign
