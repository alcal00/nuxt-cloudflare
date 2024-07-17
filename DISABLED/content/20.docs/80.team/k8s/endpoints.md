# Endpoints to ease dev


# ipv6 backend

The backend is in ipv6 and we access it with ipv4.

```shell
# define the service/endpoint
kubectl -n paxparphilippe apply -f endpoint1768b.yaml
# start the service
./make2 dev-portal
```

You should be able to access the service with https://philippe2.paxpar.tech


# ipv4 backend

```shell
# enable host-access add-on (should be alredy done)
microk8s enable host-access
# check if host-access add-on is enabled
microk8s.status
# define the service/endpoint
kubectl -n paxparphilippe apply -f endpoint1768.yaml
# start the service
python3 -m http.server 9663
```

You should be able to access the service with https://philippe2.paxpar.tech


Note : 10.0.1.1 is the host ip (see host-access microk8s add-on)

Inspired by https://torchbox.github.io/k8s-ts-ingress/external/
