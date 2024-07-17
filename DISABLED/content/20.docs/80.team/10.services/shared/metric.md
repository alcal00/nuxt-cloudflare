# metric module

## Use a given metric

```
# Import the metric
from paxpar.services.shared.metric.ref import business_check_pdf_file

# increment the metric (because it is a counter)
business_check_pdf_file.inc()
```

## fastAPI integration

The previous example will not work on its own
because we need a web server to expose the `/metrics`.

We use fastAPI, this is a simple working example `example.py` :

```
from prometheus_fastapi_instrumentator import Instrumentator
from paxpar.services.shared.metric.ref import *
from fastapi import FastAPI

app = FastAPI()
Instrumentator().instrument(app).expose(app)


@app.get("/mypage")
async def root():
    # increment the metric (because it is a counter)
    business_check_pdf_file.inc()
    return {"message": "business_check_pdf_file à été incrémenté"}
```

Run this example with :

`poetry run uvicorn example:app --reload`

In your browser, hit several times `http://localhost:8000/mypage`
and look at the changing metrics at `http://localhost:8000/metrics`.


## Metric reference

All metric are defined in `paxpar.services.shared.metric.ref`.

To list all metrics :

```
>>> from paxpar.services.shared import metric
>>> metric.ref.all()
id                             ! type     ! description                                ! labels
-------------------------------+----------+--------------------------------------------+-------
business_check_pdf_file        ! Counter  ! PDF file processed by business_check       !
business_check_pdf_signature   ! Counter  ! PDF signature processed by business_check  ! psc, signer

```
## Define a new metric

Add the new metric in `paxpar.services.shared.metric.ref` :

```
my_new_metric = Counter('my_new_metric', 'My shiny new counter metric')
```

## promql

cf https://docs.victoriametrics.com/keyConcepts.html#instant-query

```
pp_api_up{user="philippe.entzmann@gmail.com", path="/api/pdf/check/",domain="dev.paxpar.tech",status="2xx"}


pp_api_up{user="philippe.entzmann@gmail.com", path="/api/pdf/check/",domain="dev.paxpar.tech",status="2xx"}


sum(pp_api_up{user="philippe.entzmann@gmail.com"}) - (sum(pp_api_up{user="philippe.entzmann@gmail.com"}) offset 5m)

sum(pp_api_up{path="/api/pdf/check/", status="2xx"} default 0) - sum(pp_api_up{path="/api/pdf/check/", status="2xx"} offset 1200m default 0)
```