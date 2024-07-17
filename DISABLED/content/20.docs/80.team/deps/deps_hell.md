# fixing circular import

See `.pydeps` for default values (exclusions).


[import cycles](https://pydeps.readthedocs.io/en/latest/index.html?highlight=import#import-cycles)

```
poetry run pydeps paxpar --show-cycles \
        --exclude *test_* *tests* *module* *.venv*
```

```
poetry run pydeps paxpar --cluster --max-cluster-size=3
```


```
poetry run pydeps paxpar \
                -o services/docs/docs/dev/deps/deps_paxpar.svg \
                --exclude *test_* *tests* *module* *.venv* \
                --noshow
```

## huge graph


```
poetry run pydeps paxpar/services/core/craft \
        --cluster --max-cluster-size=1000 \
        --keep-target-cluster --rmprefix paxpar.
```

## interactive graph

```
poetry run pydeps paxpar \
        --show-deps \
        --no-output \
        > services/docs/docs_dev/deps/deps.json
```

## circular refs hunt

Target at paxpar.services.shared and paxpar.services.shared.roles

down to :

* paxpar/services/core/craft/tools2.py
* paxpar/services/core/craft/script_default.py
* paxpar/services/core/craft/script_default.py

the mess is in CraftContext/CraftContextModel defined in tools2.

TODO: create ICraftContext

```
poetry run pydeps paxpar --show-cycles
```

fix `paxpar/services/core/ref/__init__.py`

