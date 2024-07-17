# DNS

To publish paxpar to a new endpoints here are the steps :

* add an entry in the DNS server (gandi for our DNS provider) ;
  define an IPv4 entry and an IPv6 (if available)
* for a K8S production/UAT entry, change the `values.yaml` file (see section below)
* for a K8S dev/next entry, change the `.values.yaml` file (see section below)
* for a local entry, apply endpoints manually (see [details here](/docs/k8s/endpoints/))

# values.yaml


Update `hosts` and `tls` sections of the `values.yaml` file.


```yaml
hosts:
    - host: uat.qdoc.paxpar.tech
        paths: ["/"]
```

```yaml
tls:
    - secretName: paxpar-tls
        hosts:
        - uat.qdoc.paxpar.tech
```
