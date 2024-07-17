# podman



## working set


```
podman run -ti \
    --entrypoint /bin/bash \
    -p 3000:3000 \
    -p 4000:4001 \
    -p 24678:24678 \
    node:18


apt update
apt install --yes byobu neovim
wget --quiet https://github.com/caddyserver/caddy/releases/download/v2.7.4/caddy_2.7.4_linux_amd64.deb
apt install --yes ./caddy_2.7.4_linux_amd64.deb

npx nuxi@latest init docs -t themes/docus
cd docs
npx yarn install
npx yarn dev --host
```


```
# Caddyfile
# caddy start
# websocket proxy
:4001 {                                  
        reverse_proxy 127.0.0.1:4000     
}                                        

```



## misc 0

```
podman run -ti \
    --network=bridge \
    --name nuxtdev \
    -v ${PWD}:/paxpar-front \
    -v ${PWD}/../paxpar-widgets:/paxpar-widgets \
    --workdir /paxpar-front \
    -e PAXPAR_WIDGETS_PATH=/paxpar-widgets \
    -p 3000:3000 \
    -p 4000:4000 \
    -p 24678:24678 \
    --entrypoint=npx \
    node:18 nuxi dev
```

Using podman (or docker) for development is not an option at this time
since the nuxt content websocket port (4000) setting can't be changed easily
(see [this content ticket](https://github.com/nuxt/content/issues/1914)).


## misc

```
podman run -ti \
    --entrypoint /bin/bash \
    -p 3000:3000 \
    -p 4000:4000 \
    node:18
```

```
apt update
apt install --yes byobu neovim
wget --quiet https://github.com/caddyserver/caddy/releases/download/v2.7.4/caddy_2.7.4_linux_amd64.deb
apt install --yes ./caddy_2.7.4_linux_amd64.deb

caddy reverse-proxy --from localhost:3000 --to 0.0.0.0:3000
caddy reverse-proxy --from localhost:4000 --to 0.0.0.0:4000

npx nuxi@latest init docs -t themes/docus
cd docs
npx yarn install
npx yarn dev
```




caddy reverse-proxy --from :2080 --to :9000





```
podman run -ti \
    --entrypoint /bin/bash \
    -p 3000:3000 \
    -p 4000:4000 \
    --ip=10.0.3.100 \
    node:18
```



```
podman run -ti \
    --entrypoint /bin/bash \
    node:18
```

## misc2


```
podman run -ti \
    --entrypoint /bin/bash \
    -p 3000:3000 \
    -p 4000:4001 \
    -p 24678:24678 \
    node:18


apt update
apt install --yes byobu neovim
wget --quiet https://github.com/caddyserver/caddy/releases/download/v2.7.4/caddy_2.7.4_linux_amd64.deb
apt install --yes ./caddy_2.7.4_linux_amd64.deb

npx nuxi@latest init docs -t themes/docus
cd docs
npx yarn install
npx yarn dev --host


```


```
#:3001 {                                  
#        reverse_proxy 127.0.0.1:3000     
#}                                        
:4001 {                                  
        reverse_proxy 127.0.0.1:4000     
}                                        

```