# UAT

# Responsable
- Éric Forgeot (eric@paxpar.tech), tel 06 83 59 42 90 (préférez les SMS si urgence)

# Utilisation
 - Tests de Paxpar https://uat.paxpar.tech/


## Historique serveur UAT Paxpar
- 2021-07-09 : migration UAT du serveur Saturne vers serveur Victoire
- 2021-09-07 : remigration UAT vers serveur Pluton (PROD), sur namespace dédié


# Installation

## Installation K8S

- installation classique avec CI/CD (comme pour PROD)


### Certificat

Si le certificat bloque, utiliser les exemples issus de :

```
paxpar/docs/deploy/deploy_paxpar/cert_issuer_paxpar.yaml
paxpar/docs/deploy/deploy_paxpar/cert_ingress_paxpar.yaml
```

adapter si nécessaire, et relancer le certificat ainsi :

```
kubectl apply -f cert_ingress_paxpar.yaml -n paxpar-uat
kubectl apply -f cert_issuer_paxpar.yaml
```


## Installation ancienne (ceci concerne l'ancienne version de UAT qui était sur le serveur de DEV)

## Installer byobu

```bash
apt update
apt install byobu
```

## Désactiver certains services

> systemctl disable snmpd


## Installation serveur

Ici est décrit le déploiement UAT.
Voir [cette page](serveur-Prod) pour le déploiement en prod.


Installation et conf de base :
```bash
# outils client
bash <(curl -s https://gitlab.com/phec.net/edouard/-/raw/v0.3.0/k8scli/install.sh)
# microk8s et addons
bash <(curl -s https://gitlab.com/phec.net/edouard/-/raw/v0.3.0/microk8s/install.sh)
# ingres et cert-manager
bash <(curl -s https://gitlab.com/phec.net/edouard/-/raw/v0.3.0/microk8s/ingress-cert-manager.sh)
```

## Déploiement paxpar UAT

URL de déploiement par défaut : https://uat.paxpar.tech/


Créer/modifier le fichier deploy/paxpar/values_dev_override.yaml :
```
ingress:
  annotations:
    cert-manager.io/issuer: "letsencrypt-prod"

extraEnv:
  - name: PP_ENV
    value: DEV
  - name: PP_CHAT_URL
    value: https://paxpar.tech/matter/api/v4/
  - name: PP_CHAT_USER
    value: ludovic
  - name: PP_CHAT_PASSWORD
    value: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Puis lancer le déploiement avec :
```
skaffold -p uat run
```




# Services annexes

Pour nettoyer les images docker, dans crontab :

`00 22 * * 7 /usr/bin/docker system prune -af > /tmp/docker_prune.log`



# Notes

Info anciennement sur https://gitlab.com/arundo-tech/paxpar/-/blob/master/docs/deploy/index.md
