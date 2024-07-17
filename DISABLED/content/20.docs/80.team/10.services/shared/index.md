# Services shared ressources

The `services/shared` is not a service
but a collection of tools used by the other services.

* [global ID](#global-id)
* [metric](metric.md)
* [chat](chat.md)



## Global ID

```
from paxpar.services.shared import gid

# generate a global user id
user_id = gid.generate('bob@paxpar.tech', 'user')
# returns 'user_YwnriY4wN51Sa9H1hQsq2C17Io4OileroUI1aim6B04'

# check if the gid match a given user email
gid.check(user_id, 'bob@paxpar.tech', 'user')
# return True or False

# get the gid prefix
gid.prefix(user_id)
# returns 'user'

```


The general form is :
`gid.generate(prefix, payload)`

The payload is as tring and a salt is added.

The salt is defined as an environment variable in the concerned services.

