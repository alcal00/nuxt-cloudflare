# Princing / crédits

En tant qu'utilisteur :

* je dispose de crédits que je consomme
* lss crédit sont consommés à l'usage ou par souscription
* les crédits sont attribués à chaque paiemnt confirmé par Stripe
* à la date anniversaire (+1), les crédits sont débités en fonction des mes souscriptions

En tant qu'administrateur paxpar :

* je peux consulter la liste des comptes utilisateurs avec leur crédit courant, la date du dernier versement stripe
* je peux consulter la liste des versements stripe pour un uilisateur donné
* je peux ajouter des crédits à un utilisateur donnée en fournissant un motif

## scenario 1

un abonnement de 30 credits donnant droit à :

* 1 craft form (10 credits/mois)
* 2 templates personnalisés (2*9 credits/mois)

Il reste 2 credits.

à l'usage :

* generation d'un PDF : 0,001 credit par Mo de PDF
* signature d'un PDF : 0,2 credit par signature
* verification d'un PDF : 0,0002 credit par Mo de PDF

il peut par exemple générer 500 PDF de 1 Mo, faire 5 signatures,
vérifier 2000 fois ces PDF

## plans

C'est le plan qui détermine si des credits ou des limites sont à appliquer.

```yaml
roles:
  - view
  - check
  - custom_style
  - custom_domain
  - sign
credits:
  payment_reset_value: 12
  debits:
    - cost: 1
      rule:
        - GET {PROXY_CORE}/api/sign/yousign
        - POST {PROXY_CORE}/api/sign/yousign
    - cost: 2
      rule:
        - GET {PROXY_CORE}/api/sign/universign
        - POST {PROXY_CORE}/api/sign/universign

```
## architecture

### table credits

Une table `credits` avec une ligne par utilsiateur :

* email
* balance (should be positive)

### table credits_log

Une table `credits_log` avec une ligne par transaction de crédit/débit :

* email
* created
* credit (positive or negative)
* balance (should be positive)
* source (source as json payload : stripe payment, url ressource, plan, ...)

### broker messages

Some broker messages :

* credit reset annonce : `{user}/credit/reset/announce`
* credit change annonce : `{user}/credit/change/announce`
* credit refund annonce : `{user}/credit/refund/announce`

Sample payload for a credit reset after a stripe subscription payment :
```yaml
# topic : `alice@mail.com/credit/reset/announce`
email: alice@mail.com
amount: -2.0
old_balance: 0.45874
new_balance: 12.0
transaction_id: b222804c-241b-4c42-8c53-cf39035c03eb
source:
  type: stripe
  stripe_id: 6778678HHYYT657
```

Sample payload for a not confirmed transaction
(example : before an API call that may fails) :
```yaml
# topic : `alice@mail.com/credit/change/announce`
email: alice@mail.com
amound: -0.336
old_balance: 11.0
new_balance: 10.664
source:
  type: api
  url: /api/sign
```

Sample payload for a refund transaction
(example : after a failed API call) :
```yaml
# topic : `alice@mail.com/credit/refund/announce`
email: alice@mail.com
amound: 0.336
old_balance: 10.664
new_balance: 11.0
source:
  type: api
  url: /api/sign
```


Sample payload for a confirmed transaction
(example : subscribing to a given craft) :
```yaml
# topic : `alice@mail.com/credit/change/announce`
email: alice@mail.com
amound: -4.0
old_balance: 12.0
new_balance: 8.0
transaction_id: e9d36535-121f-4df7-8984-f708d75526e3
source:
  type: craftform-subscribe
  id: ref.common.facturx.gen
```

Sample payload for a confirmed transaction
(example : un-subscribing from a given craft) :
```yaml
# topic : `alice@mail.com/credit/refund/announce`
email: alice@mail.com
amound: 4.0
old_balance: 8.0
new_balance: 12.0
transaction_id: af10163d-d609-41fd-9330-95a8d2b72700
source:
  type: craftform-subscribe
  id: ref.common.facturx.gen
```

Sample payload for a confirmed transaction
(example : refund from support team :
```yaml
# topic : `alice@mail.com/credit/change/announce`
email: alice@mail.com
amound: 3.0
old_balance: 7.0
new_balance: 10.0
transaction_id: bb10163d-d609-41fd-9330-95a8d2b73333
source:
  type: support
  author: nadine@paxpar.tech
  desc: Crédit suite incident #5352
```

## workflow

1. user call an API
1. perm service intercept the call
1. the token contains a plan which allows this API call
1. the plan tells the cost of the API call (2 coins)
1. the user balance is 11 coins
1. publish message `credit change annonce` (-2, 9)
1. call the API
1. if status code is not 200 :

    1. publish message `credit change annonce (refund)` (2, 11)


## todo

* définir dans le plan le montant crédité chaque mois
* limiter la possibilité de changer de souscription dans un même mois
* décrire ce qui se passe lors d'un changment d'abonnement
* API pour ajouter des crédits (admin only)
