# pyenv

We rely on pyenv and poetry to set up a reproductible python environment.

## pyenv poetry docker

Since it is very troublesome to set up a correct environment,
let's try it in a docker container.

Start the container :
```
docker pull ubuntu:jammy

docker run -ti \
    -v $PWD:/app/paxpar \
    --name ppcore \
    ubuntu:jammy
```

In the container, install deps :
```shell
# install deps
apt update
apt dist-upgrade --yes
apt install --yes byobu curl git
# cf https://github.com/pyenv/pyenv/wiki#suggested-build-environment
# TODO: tzdate non-interactive
# cf https://stackoverflow.com/questions/44331836/apt-get-install-tzdata-noninteractive
DEBIAN_FRONTEND=noninteractive apt install --yes make build-essential libssl-dev zlib1g-dev \
libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

# install pyenv
curl https://pyenv.run | bash

# setup pyenv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# set global python to the target version
pyenv install 3.10.5
pyenv global 3.10.5

# install poetry
curl -sSL https://install.python-poetry.org | python3 -
export PATH="/root/.local/bin:$PATH"

# install node
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
corepack enable


# setup pp env
cd /app/paxpar
poetry install
./make2 setup
```
