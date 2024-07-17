# meilisearch


see https://www.meilisearch.com/docs/learn/cookbooks/docker

```
cd ~/src/paxpar
mkdir temp/meili_data
docker run -it --rm \
  -p 7700:7700 \
  -v $(pwd)/temp/meili_data:/meili_data \
  getmeili/meilisearch:v1.2

```


todo :

* [ ] set masterkey (-e MEILI_MASTER_KEY='ll4JQ7llgTcJxMZhN-PdKN7zSSwcXBBmGPGy9-J_THE' \)
* [ ] move to k8s helm
* [ ] "--import-dump"
* [ ] crawler for indexing content