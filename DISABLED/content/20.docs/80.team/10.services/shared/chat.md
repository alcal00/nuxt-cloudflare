# chat module

# Use a given metric

```
# Import the metric
from paxpar.services.shared.chat import chat

# Send a simple message to the general room
chat('Hello World !')

# Send a typed message to all the rooms defined
chat('Hello World !', msg_type='check_pdf')

# Send a typed message to all the rooms defined with the given user context
chat('Hello World !', msg_type='check_pdf', user='toto@edf.fr')

```
## context fields

Context fields help to send message to given rooms :

* `user` : email of the connected user (ex: **bob@acme.com**)
* `company` : company of the connected user (ex: **acme**)
* `environment` : **prod**, **uat** or other values for dev

## Message reference

| msg_type    | support  | \<user\> | \<company\>  | groupe_edf_facture |
|-------------|----------|--------|-------------|---------------------|
| new_pdf     | X  | X | - | X  |
| check_pdf   | X  | X | X  | -  |


## Room reference

Pre defined rooms :

* `support` : all chat related to support (all)
* `user_bob@acme.com` : all chat related to user `bob@acme.com`
* `company_acme` : all chat related to all user of company `acme`
* `bot` : where we can issue bot command

## Message type 

Use emoticon