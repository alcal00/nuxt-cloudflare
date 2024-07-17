# Lemon Squeezy integration

Between [lemon squeezy](https://app.lemonsqueezy.com),
[supabase](https://supabase.com/dashboard)
and paxpar.


Supported [webhooks](https://docs.lemonsqueezy.com/help/webhooks) :

* order_created
* order_refunded
* subscription_created
* subscription_updated
* subscription_cancelled
* ~~subscription_resumed~~ (IGNORED)
* ~~subscription_expired~~ (IGNORED)
* ~~subscription_paused~~ (IGNORED)
* ~~subscription_unpaused~~ (IGNORED)
* ~~subscription_payment_failed~~ (IGNORED)
* ~~subscription_payment_success~~ (IGNORED)
* ~~subscription_payment_recovered~~ (IGNORED)
* ~~subscription_payment_refunded~~ (IGNORED)
* ~~subscription_plan_changed~~ (IGNORED)
* ~~license_key_created~~ (IGNORED)
* ~~license_key_updated~~ (IGNORED)

Not supported because a `subscription_created` or `subscription_updated` issued in all cases.

## workflows

### new subscription

* user go the `/pricing` page
* user choose a plan
* a lemon overlay is displayed
* user enters his email and payment info
* lemon emits webhook `subscription_created`
* TODO: if user does not exists, create it
* TODO: is user is not conencted, send a magic link
* TOOD: redirect to a welcome page (/confirm)
* TODO: how to create a checkout/overlay link on site build ?


### recurrent payment

## ref entities

### roles-product 

See `supabase/functions/_shared/billing.ts` :

```
const REF_PRODUCTS_ROLES = {
    'basic': ['ROLE1', 'ROLE3', 'ROLE4', 'ROLE8',],
    'designed': ['ROLE1', 'ROLE3', 'CRAFT_FINALIZE', 'CRAFT_FILL',],
    'distribution': ['ROLE1', 'ROLE3', 'CRAFT_TEMPLATE', 'ROLE8',],
    'extended': ['CHECK', 'CRAFT_FILL', 'CRAFT_PREVIEW', 'CRAFT_FINALIZE'],
}
```

`const DEFAULT_ROLES = ['DEFAULT_ROLES', 'ROLE3', 'ROLE4', 'ROLE8',]
`


| role \ plan       | anon | no plan | basic | design | distrib |
| :---------------- | :--- | :------ | ----- | ------ | ------- |
| CHECK             |      |         |       |        |         |
| CHECK_NOBANNER    |      |         |       |        |         |
| CRAFT             |      |         |       |        |         |
| CRAFT_NOBANNER    |      |         |       |        |         |
| CRAFT_SIGN        |      |         |       |        |         |
| SIGN_CMD          |      |         |       |        |         |
| SIGN_CHAMBERSIGN  |      |         |       |        |         |
| SIGN_YOUSIGN      |      |         |       |        |         |
| GALLERY           |      |         |       |        |         |
| DOCUMENT          |      |         |       |        |         |
| S3_CUSTOM         |      |         |       |        |         |
| DEBUG             |      |         |       |        |         |
| TAKEOUT           |      |         |       |        |         |
| DOCS              |      |         |       |        |         |
| DOCS_TEAM         |      |         |       |        |         |
| REF_COMMON_AUTHOR |      |         |       |        |         |
| CORE_SYNC         |      |         |       |        |         |
| BLOG              |      |         |       |        |         |
| API_KEY           |      |         |       |        |         |




## config

* webhook signature secret

## TODO

* one store per front site
* lemon test mode for uat (with same product name)
* we rely on the product name on not the id
* a button in the profile page to fix roles in token
* a team dev is also a customer with a 100% coupon
* describe supbase integation
* token payload
* describe roles
* webhook signature
* store invoice on user s3 session on subscription_payment_success