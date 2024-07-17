# tests

Running tests :

```shell
# test everything
./make2 test-core -v tests/

# test only with no side-effects (no internet, no db, ...)
./make2 test-core -v -m blackbox tests/
```



Sample test :

```
# import usefull stuff for testing
from paxpar.shortcuts.test import *

# mark this test as a blackbox one (no external deps)
@pytest.mark.blackbox
# mar this test as async
@pytest.mark.asyncio
async def test_0300():
    assert True
```
