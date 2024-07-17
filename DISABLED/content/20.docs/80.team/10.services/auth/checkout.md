# checkout

We use [stripe](https://stripe.com) to handle payment (one shot and subscriptions).

See our [stripe page](stripe) for details about Stripe integration.


## checkout

API call to checkout : ```/api/checkout/session```

For a single checkout (buying credits) we give a `qty` param (quantity of credit needed).

Subscription checkout (recurrent credits amount) we give a `price_id` param
(an existing stripe price id).

!!! important
    The credit system is not used anymore
    and will be deprecated soon.

If a `redirect` param is given, upon stripe callback the redirect will occur
(the redirect could be relative to the nuxt front app).
the default `redirect`is `/front/checkout/success`.

Sample call for a one shot 12 credits buy :

`/api/checkout/session?qty=12`

Sample call for a subscription :

`/api/checkout/session?price_id=price_1KqDAWK0npsJqs8Ma6zyHflo`

## prices page

The price page could contain a subscription button with a link to :

`/api/checkout/session?price_id={STRIPE_PRICE_ID}`

`STRIPE_PRICE_ID` is a Stripe price ID of the form `price_xxxx`

This is an example link :

`/api/checkout/session?price_id=price_1KqDAWK0npsJqs8Ma6zyHflo`

Following this link will bring the user to a Stripe checkout/payment page.
After a successfull payment Stripe will bring the user back to a paxpar page.

## credit reset

Subscription wil reset the credit counter on each payment.

!!! important
    The credit system is not use anymore
    and will be deprecated soon.


## Stripe webhooks

The stripe account must have webhook endpoint defined and pointing to
`/api/checkout/webhook`


Supported message type :

* `checkout.session.completed`
* `invoice.paid`
* `invoice.payment_failed`


A single stripe account can serve payment for several paxpar instances.
So an endpoint is defined for each paxpar instance.

A payment will then trigger multiple webhook (one per paxpar instance).

The subscription/checkout session contains the paxpar FQDN instance (like dev.paxpar.tech or prod.paxpar.tech)
in the metadata.

The auth service recieving the webhook will ignore it if the paxpar FQDN does not match.


## stripe local test

Install [stripe cli](https://github.com/stripe/stripe-cli/releases) and stripe VS code extension.

```
wget https://github.com/stripe/stripe-cli/releases/download/v1.8.6/stripe_1.8.6_linux_amd64.deb
sudo dpkg -i stripe_1.8.6_linux_amd64.deb
```

```
stripe login
stripe listen --forward-to localhost:4242/webhook
stripe listen --forward-to [2a01:4f9:2a:25d5::17]:8883/api/checkout/webhook

stripe trigger invoice.payment_succeeded
```
