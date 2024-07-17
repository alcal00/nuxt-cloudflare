# supbase realtime

[Python supbase realtime client](https://github.com/supabase-community/realtime-py).

[supabase realtime js](https://supabase.com/docs/guides/realtime/postgres-changes)

experiment with :
* scripts/dummy_realtime.py
* scripts/dummy_realtime_async.py

TODO :
* [x] test post from postgres table update
* [x] test multiple python client
* [x] test post from python (by updating a table)
* [x] [async possible](https://github.com/supabase-community/realtime-py/issues/39#issuecomment-1166561701) ?
* [ ] test js/ts client
* [x] fastapi integration
* [ ] paxpar-core integration
* [ ] event filtering
* [ ] publish from Python with db


## async

seems to have internal [async support](https://github.com/supabase-community/realtime-py/issues/39#issuecomment-1166561701).

how to integrate with fastapi ??