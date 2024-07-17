# Configuration

```
# import the conf module
from paxpar.services.conf import get_conf

# get a handle on the conf (load it if needed)
conf = get_conf()

# access conf items
print(conf.PP_API)
```

For local development, the conf can be overriden with a `.env` file at the root `paxpar` folder.

!!! WARNING
    **Never** commit your `.env` file in git.

    (it should already be in the `.gitignore` file)


See the `.env_template` for an example.
