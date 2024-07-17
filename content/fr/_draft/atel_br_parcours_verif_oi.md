---
model: brouillon_atelier
title: Workflow d'un craft
description: Confiance dans votre parcours de vérification attestation cariste
image: 
aside: false
---

::alert{type="warning"}
:Icon{name="mdi:alert-decagram"}
Contenu en cours de rédaction !
::

::alert{type="info"}
* TODO: mettre l'image correspondante 
::

# Scénario : Le parcours dans la vérification d'un document ordre d'intervention

## Anomalie - l'attestation cariste de Sophie ne sera plus valable pour la prochaine prestation prévue à partir de septembre

Patrick doit envoyer un ordre d'intervention à EDF, il a le cahier des charges envoyé par EDF auquel il doit également associer les carnets de 3 employés qu'il va mandater pour effectuer la prestation du 14/09/2022 au 31/12/2022.

### Acteur

- Patrick : chargé d'affaire chez Alcove
- Paul : employé chez Alcove
- Sophie : employé chez Alcove
- Alain : employé chez Alcove

### Scénario workflow d'un craft ordre d'intervention

Patrick se connecte sur VérifTonDoc
Il choisit Je génère dans le workflow
Il dépose 
    - le CDC d'EDF
    - le carnet de Paul
    - Le carnet de Sophie
    - Le carnet de Alain
Il vérifie 
La checklist indique un status rouge pour Sophie
Il déroule (c'est l'attestation cariste qui ne sera plus valable pour les dates demandées pour la prestation)
Il doit demander à Sophie qu'elle lui renvoie son carnet en pdf avec la nouvelle attestation
Il clique sur Envoi de mail
Il choisit le mail de Sophie
Il lui indique que son attestion cariste n'est plus valable et qu'elle doit lui renvoyer son carnet actualisé
Il clique sur Envoyer
Il constate dans son dossier en-cours qu'il y a un pdf en attente de retour de Sophie
Sophie reçoit le mail
Elle clique sur le lien dans le mail et arrive sur la plateforme craft carnet
Elle dépose la nouvelle attestation
Elle coche les cases attestant qu'elle certifie l'authenticité du document
Elle signe via la plateforme en cliquant sur finaliser
Elle clique sur Envoyer
Patrick reçoit un mail de confirmation de réception du document carnet de la part de Sophie
Il va dans son dossier en-cours
Il constate que le pdf en attente à changé de statut, il est en mode réceptionné
Il le dépose dans la dropzone craft, cela remplace le premier carnet de Sophie
Il vérifie
La checklist indique que tout est vert
Il peut finaliser son ordre d'intervention 
