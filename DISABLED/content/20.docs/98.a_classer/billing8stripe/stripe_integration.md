# Stripe integration


see https://stripe.com/docs/billing/subscriptions/webhooks

see https://stripe.com/docs/billing/subscriptions/build-subscriptions?ui=checkout


## create subscription product and price

```shell
stripe products create \
  --name="Billing Guide: Premium Service" \
  --description="Premium service with extra features"

stripe products create \
  --name="Billing Guide: Basic Service" \
  --description="Basic service with minimum features"


stripe prices create \
    -d product=prod_H94k5odtwJXMtQ \
    -d unit_amount=1500 \
    -d currency=usd \
    -d "recurring[interval]"=month

stripe prices create \
    -d product=prod_HGd6W1VUqqXGvr \
    -d unit_amount=500 \
    -d currency=usd \
    -d "recurring[interval]"=month
```

## cron task

see https://supabase.com/docs/guides/functions/schedule-functions


## stripe + supabase

see [this tuto](https://www.youtube.com/watch?v=6OMVWiiycLs) to setup supabase to recieve stripe webhook.

see [local supabase function dev](https://supabase.com/docs/guides/functions/local-development)


```shell
# forward test stripe webhook to localhost
stripe listen \
  --headers "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0" \
  --forward-to localhost:54321/functions/v1/on-stripe-webhook
# trigger test event
stripe trigger checkout.session.completed
stripe trigger invoice.paid
```


## tables

### subscriptions

* id (PK = subscription_id)
--* user_id (FK -> auth.user)
* email
* domain
* customer_id
* product_id
* price_id
* date_start
* date_end
--* expired


## links

Pricing page (usefull ?) : 
https://checkout.stripe.com/c/pay/cs_test_a1czeD5LCssK0Dgd6i3XeG0TQsCSy6KxT9gOsCFlMKYHx85kRVfHkJzamA#fidkdWxOYHwnPyd1blpxYHZxWjA0TXNjRG9ONWt1dk90dj1IXUBNSzc8cVBBREFSVXdyMklyRG1IYkhJcTdUUGJualBSXGRyMGhMPG5HY2kxa3BUb2g0N2Q9UktJUzNmPU9HYUJAfUdDVUpJNTVJXUh2RGxXUyd4JSUl


Payment link 
https://buy.stripe.com/test_dR65mN0Mzg24gBG9AU

[test card](https://stripe.com/docs/testing#europe-and-middle-east) : France VISA 4000002500000003

Subscription :
https://dashboard.stripe.com/test/subscriptions/sub_1NL4NkK0npsJqs8My6RxEFQB