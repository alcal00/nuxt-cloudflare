# Plans

Each authenticated user is associated with a plan.
This plan grants him access to paxper services.

Les limitations concernent :

* l'accès aux services
* les objects de références (checklist, crafform, ...)


Les attributs d'un plan :

* nombre de checklists privées
* nombre de craft forms privées
* nombre de checkmodules privées
* nombre de templates privées
* nombre d'invitations

A plan name starting with an underscore `_` will not be visible.

## _all plan

The `_all` plan is a special plan that is attached to any user
(identified or not).

This is the plan that must contain all the public routes.


## _admin plan

The `_admin` plan contains all the roles for administrator access.

!!! danger
    This plan is very dangerous and should be granted wisely

!!! note
    More specialized plans like `_support` or `_billing` should be created
    to avoid the user of the `_admin` plan.


## ref-common

Roles are defined in the file `pp-ref-common/_sys/plans.yaml`


This is an example of a plan definition :

```yaml
# ┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉ #
  - id: test-solo
    #visible: true
    title: Solo
    unit: / mois
    button: souscrire
    features:
      - Accès Illimité - Documents PDF générés et vérifés
      - Accès Illimité - Référentiel public (formulaires, modèles, vérifications)
      - Accès Limité - Référentiel privé (1 formulaire, 1 modèle, 1 vérification)
      - Accès Illimité - Compte Utilisateur
      - 1 Compte Emetteur-référent
      - Gratuit - Coût de mise en oeuvre
      - 48h - Délai Support
      - ❌

    prices:
    - price_id: price_1KG7DFFvDsHBMRpKQ85owXSA
      payment_link: https://buy.stripe.com/test_5kAbMr51h3Ba6T6aEG
      domain: dev17.paxpar.tech
      amount: 79 €
    - price_id: price_1KGmz5FvDsHBMRpKjImdmuw0
      payment_link: https://buy.stripe.com/test_4gweYDbpFc7GfpC9AH
      domain: dev.paxpar.tech
      amount: 79 €
      # Tarif SOLO - uat - compte stripe Arundo
    - price_id: price_1KLoKpK0npsJqs8MUFfR6Trb
      payment_link: https://buy.stripe.com/test_6oE16x1QD2beclq4gh
      domain: uat.paxpar.tech
      amount: 79 €
      # Tarif SOLO - prod - compte stripe Arundo
#    - price_id: price_1KMrjqK0npsJqs8MBMzLXB32
#      payment_link: https://buy.stripe.com/5kA8xBgxqdib8lGeUV
#      domain: prod.paxpar.tech
#      amount: 79 €
    roles:
      - view
      - check
      - custom_style
      - custom_domain
      - role: sign
        limits:
          - metric: signatures
            max: 3
            hard_limit: true

    image: https://media.paxpar.tech/plan2_solo.jpeg
# ┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉ #
```

## Invitations

Une invitation permets d'accéder à une ressource privée.
s
Par exemple, un utilisateur peut utiliser un craftform après avoir reçu une invitation par un autre utilisateur.

Le nombre d'invitations qu'un utilisateur peut envoyer est limité.


## Décompte et dépassement

L'utilisateur qui a le plan crée les craftform et templates
avec le champs `owner`contenant son identifiant (adresse de courriel) et le champs `scope` contenant la valeur `private`.

Lors de l'actualisation du référentiel, le décompte des craftforms et templates et réalisés.
Seuls ceux avec les valeurs de champs `owner` et `scope` correspondantes sont décomptés.

En cas de dépassement, au choix :
* désactivation de l'object (`active`: False)
* facturation supplémentaire


## Accès aux checklists

Toutes les checklists sont accessibles.
Les checklists privées sont utiilsables
mais affichent un message indiquant qu'il faut être invité
(ce message apparaît en KO).


## Accès aux craftforms

Tous les craftforms sont accessibles.
Les craftforms privés sont utilisables
mais affichent un message indiquant qu'il faut être invité
(ce message apparaît au lancement du formulaire
et sur chaque PDF généré).


## Accès aux checkmodules

Tous les chckmodules sont accessibles.
Les checkmodules privés sont utilisables
mais affichent un message indiquant qu'il faut être invité
(ce message apparaît en KO,
le développeur du modue peut maintenir ou pas le comportement normal).


## Accès aux templates

Tous les templates sont accessibles.
Les templates privés sont utilisables
mais affichent un message indiquant qu'il faut être invité
(ce message apparaît sur chaque PDF généré).


## Scenario 1

Le plan limite le nombre de craftform privés à 3
et le nombre de template à 10.


## WIP : perm/auth

Cas de l'accès au craft form avec un template donné

L'URL est de la forme `/api/craft/{CRAFT_ID}?template={TEMPLATE_ID}̀

Comme l'URL contient `{CRAFT_ID}` on récupère la liste des objets publics ref autorisés par un appel API au service ref
̀ GET /api/ref/craftform`
(l'appel est mis-en-cache avec une durée assez long : 10mn)
si dans la liste -> on autorise (`FACTICE=False`, fin de la recherche)

on récupère la liste des objets privés ref autorisés pour cet utilisateur par un appel API au service ref
̀ GET /api/ref/craftform/private`
(l'appel est mis-en-cache avec le timestamp du token ; utile pour invalider le cache lors d'un nouveau token).
si dans la liste -> on autorise (`FACTICE=False`, fin de la recherche)

Sinon `FACTICE=True`
_
on fixe le header `FACTICE`


TODO: que faire pour les templates publiques ?

## Decisions architectures

* OUI : Essayer de filtrer uniquement via le service perm

* NON : Mettre les id des objets ref autorisé dans le token ?
  car celà risque d'être trop gros

* OUI : avoir un appel API (en mettre en cache) pour obtenir les id des objets.

* NON : Est-ce que le servic `perm`peut modifier le PDF de retour ??
  NON car celà va casser les signatures

* OUI : Injecter dans les headers la liste des objets autorisés ?

* NON : Marquer les URL qui renvoient des PDFs sensible pour pouvoir
les marquer comme `factice` depuis le service perm.
* NON : Idem pour les checklists : filter/modifier les contenus renvoyés par l'API `api/checklist`
