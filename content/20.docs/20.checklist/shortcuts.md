# shortcuts

Many usefull modules are grouped in the `paxpar.shortcuts.checkmodule` module.
It's always a good idea to import it first :

```
# start all your forge notebook with this
from paxpar.shortcuts.checkmodule import *
```

## catch_value()

Easier field access and AttributeError silencer
With a lambda you can turn AttributeError to None in any deep structure access

```
x = catch_value(lambda: doc.a.b.c.d)
```

```
attachment_schema = catch_value(lambda: attachment.schema.content)
```