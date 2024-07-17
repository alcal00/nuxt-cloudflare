# Récapitulatif serveurs


- [serveur UAT](../serveur-UAT)
- [serveur Prod](serveurs/serveur-Prod)
- [serveur Monitoring](serveurs/serveur-Monitoring)
- [serveur YunoHost](serveurs/serveur-YunoHost)
- [serveur DEV](serveurs/serveur-DEV)



## Instances

* serveur UAT : 88.99.149.232 (hetzner)
* serveur prod : N/A


## Serveurs actifs

* scaleway 1 : bacasable 1
* scaleway 2 : prod
* hetzner 1 : bacasable 2


| Nom | Responsable | Domaines | IP v4 | IP v6 | Fournisseur | Description | Ram | Info cpu & disque | prix |
|---|---|---|---|---|---|---|---|---|---|
| [Victoire](serveurs/serveur-UAT) | Arundo | bac.paxpar.tech  | 51.15.225.178 | x | scaleway (Arundo ou PHEC ?) | bac à sable | 8 Go | AMD 4 x 4192 |
| [Mercure](serveurs/serveur-YunoHost)| Arundo| paxpar.tech  |  188.34.192.124  | 2a01:4f8:1c0c:70a0::1 | hetzner (compte Cloud arundo "paxpar-ynh-2") ref cx31 | Prod outils Paxpar : yunohost + Nextcloud | 8 Go | Intel Xeon 4 x 4199 - 80 Go | 8,90 € / mois |
| [Aurore](serveurs/serveur-Aurore) | Arundo| paxpartitus.com | 51.158.77.145 | x | scaleway DEV1-M (Arundo) | Bac-à-sable 1 avec Yunohost + sauvegarde Mercure | 8 Go | AMD 4 x 4192 | 14,60 € |
| [Saturne](serveurs/serveur-DEV) | Arundo| dev.paxpar.tech | 88.99.37.170 | 2a01:4f9:2a:25d5::/64 | hetzner (compte Robot arundo), offre EX42-NVMe | Développement de Paxpar / UAT | 64 Go | Intel i7 8 x 6816 - 500 Go | 39 €/mois |
| [Pluton](serveurs/serveur-PROD) | Arundo | prod.paxpar.tech | 95.216.115.120 |  2a01:4f9:2b:18c7::2 | hetzner (compte arundo), offre EX42-NVMe | Prod k8s Paxpar | 64 Go | Intel i7 8 x 7200 |
| [Ceres](serveurs/serveur-UAT) | Arundo| uat.paxpar.tech | 88.99.149.232 | 2a01:4f8:10a:2e27::2 | hetzner (compte Robot arundo), offre EX42-NVMe | Développement de Paxpar / UAT | 64 Go | Intel i7 8 x 6816 - 500 Go | 39 €/mois |





## Notes diverses

### Rajouter une IP sur Saturne (Dev)

- `ip address add 2a01:4f8:10a:2e27::3 dev enp0s31f6`
- `ip address add 88.99.149.251/32 dev enp0s31f6`


(si l'adresse de la carte réseau change, la retrouver avec ifconfig)
