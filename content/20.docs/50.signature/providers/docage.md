---
model: verif_psc
layout: psc
lang: fr
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWmAvjTo79QytZHQ6RU-qE8Ei0zkPWekCifo0uI4pslbvSzW9qHjufgIt1pLcuEorg8Y&usqp=CAU
title: Docage
description: 📖 Lire le scénario
createdAt: 2023-08
---

## Détection Docage

Une « signature  individuelle» produit 3 signatures PAdES

## Clé publique
### Signature PAdES 1/3
- CN: DOCAPOSTE BPO - eSeal
- Certificat fils de la signature PAdES : 
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxT33o2kjoiInGBaPVcMEk8VGhwyGaaHotfrQSzlz8BsymrJPggh88b7Q65Azk8c9eu8R+kKyKv5N9rSbeCMZY7C5af40Z3ZPQyreMJELhVyd7P3dCXeFQbQ6lk5W+vw2Vi7Z+CEQXnmIzobe7/skzW5BUr7MpokAfwsLgbxk3ZPKHdfNgl17TF5VlTbII4/mI+CSs9A53U2Wju0twVfpZ3db417KxgN2DgwxveTJBn78niujcB7SxFyGKXV5/3WRS4icCZ9aMUOOXmM9Nxv8OGBBTMg7DyVFtBwZL87jPeBAGigJTB9NaRzuXABjrsBqDrwUkwnYySOil7PZGu+xJQIDAQAB
- Raison : Signé par Nadnad Nad via Contralia

### Signature PAdES 2/3
- CN: DOCAPOSTE BPO – eSeal
- Certificat fils de la signature PAdES : 
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxT33o2kjoiInGBaPVcMEk8VGhwyGaaHotfrQSzlz8BsymrJPggh88b7Q65Azk8c9eu8R+kKyKv5N9rSbeCMZY7C5af40Z3ZPQyreMJELhVyd7P3dCXeFQbQ6lk5W+vw2Vi7Z+CEQXnmIzobe7/skzW5BUr7MpokAfwsLgbxk3ZPKHdfNgl17TF5VlTbII4/mI+CSs9A53U2Wju0twVfpZ3db417KxgN2DgwxveTJBn78niujcB7SxFyGKXV5/3WRS4icCZ9aMUOOXmM9Nxv8OGBBTMg7DyVFtBwZL87jPeBAGigJTB9NaRzuXABjrsBqDrwUkwnYySOil7PZGu+xJQIDAQAB
- Raison : Certification Contralia pour la référence 2c969e2f829e6b9a0182eda3bd6b73a2

### Signature PAdES 3/3
- CN: DOCAPOSTE BPO - eSeal
- Certificat fils de la signature PAdES : 
- MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzzACt15x/QS7/wErWD+Ly6KvBVC76V03XKeYicDIYtKRMlwcH0I2UJJU3e3g/l+RAAs4XX2sRJ+xdMC5Nxk0DHdqUFcLFPOHfs5wNz7znRsINE4LmMqYsai3qQykxJqJnXg2XyAi6PfQe3gRrNCkJZNJvC7dyVD31YUn3+p5oZU9T82farHJCnpI1z/bt22uKLPibG9xviBPWoE2o6oZzPsELMq1rhBv99I3Nlc/rGSRwjqXkcvZ3GDiBTLVoLaOgP3RKeIcZJWwFpqLR/AtLcmQSYbFZaCZ7yaUxxxt1cPATah6T09BZlepEuoD5U+Aiwor9hjwNWfvpFIwJJpcrwIDAQAB
- Raison : None
- Remarque : les 2 premières clés publiques sont identiques
- La 3ème clé est identique à la 4ème de DOCAPOSTE (horodatage)
- Les 2 premières clés sont identiques quelque soit le signataire
- La 3ème est l’horodatage différente des 2 premières mais identique quelque soit le signataire
- En résumé : les 3 clés sont les mêmes pour tous les signataires