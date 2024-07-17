# filter

When no checklist is given, the engine has to guess which one to apply.

We use the `filter2` prop for this purpose
(the `filter` is currently deprecated).


## metadata

Exemple : filtrer tous les documents d'un type donné (schema) :

```yaml
filter2:
  - metadata:
      $schema: https://paxpar.tech/schema/diagissimo/diag_batiment/1
```

## attachment

Example : Check the PDF if it has an file named `cahier_des_charges.pdf` attached :

```yaml
filter2:
  - attachment:
      name: cahier_des_charges.pdf
```

`name` is not case sentivive,
this filter is the same as the previous :

```yaml
filter2:
  - attachment:
      name: CAHIER_des_CHARGES.pdf
```


## pubkey


Example : Check the PDF if it has a signature with the given public key (case not sensitive):

```yaml
filter2:
  - signature:
      pubkey: MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwoHgh/ut4XHZeB7kRwlDfLLhv+yDHyL0ZhTP/2Wi6ayOb1r4XJj9/ywUC7oM+Oygf/Qua0mdi2a8PB1UsrLUQuM5ZgKG+CErozQnBx3lrvkCgovOZ3WaVFR06EncJuTZ3gvpUguBwnBuk/Ulpcdc+M8peYThNTTA/nwrL4rZqvTzuX4XZyVRM3u/VBxg/7Xeu6YEEIubzw5RotV/svc5cMaR8mTYxqLJLMZLxHKxUpoIXpQ3zzyVI9JAvbqNBz6tJpHPBQUq1LtK26pqxKRxm/j5RlIsczm/RiRK6WKQYACh/f74TESUuJZKBrrNZTLC+NLK/lVT9vNXGrPGkUoZfQG2KSCWoH6/aYbx+xc+auXZD9u8DRUIS/LFcCGbkAyUf1Q8ZeoK6vuJ5hvWCSoZHJqF7a+WmOgQZTskyb5db56ImdIi/MNzkAy7sfDNc4MMHEYq1k4R8tIAqQSV3RGKAYn1WgxQ50+JCFJGBVFteDFfmD/HMBqEQLwstAZKkMV8MiQBXPNVUvQElKzHF/oc8eWE6Tq2C+eFyyrax7YLPitelVEqqAsT2RevbsI124AbN8jos4PPnAwRCezSWlc2olvtBvorbBNMHmQjXPaqQrD+dESRRx4+YQyBJUzoNgncV2xWOJReRghuT3Av06CqAGdXnCgvmhQX0+k8uqtwpE8CAwEAAQ=="
```

## xmp

Example : Check the PDF if it contains a given XMP tag (case sensitive !!):

```yaml
filter2:
  - xmp:
      name: "/Analysis" 
```

## filename

Example : 

```yaml
filter2:
  # exact name
  - filename: FIGARO_22-04-15_analyzed.pdf
```


Example : 

```yaml
filter2:
  # wildcard support
  - filename: FIGARO_*_analyzed.pdf
```


Example : 

```yaml
filter2:
  # single char wildcard
  - filename: FIGARO_??-??-??.pdf
```

## multiple filter

You can set multiple filters in the same checklist :

```yaml
  - metadata:
      $schema: https://paxpar.tech/schema/diagissimo/diag_batiment/1
  - attachment:
      name: cahier_des_charges.pdf
```

In this example the checklist will be triggered for a PDF which has the given `$schema`
**AND** an attachment with the given name.


## misc (OBSOLETE)

Exemple : filtrer tous les documents d'un signataire
```
owner:
  signature_pubkey: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuhHWLJL83uDTQgnJmsxoaVmd7naTpXhGmvnqLQwcg6pih6QGyvdnAnHrgVtb2jF6LuBJoVF69YICwSDdh6Fi1aEvWcVxVSFvOTyR30j3Oh84wTkeePfhutzccLYDEE9DvFbaRQyflTRnsDV081YHdAWBq9D1TtpFPd6vw7bdQ4C9sB2rpCxwSc30tAqvgltNHvo1bXOLfPEWO7XsSsElcHQJrEUiAek2rsBD+wqTwoRckXGQuPCG+U4I7kIGwWyL4zKS4C147RVNPCeeIQ111ITLkaYHCxOuFOqGoBgMwmSuf3OntR0ZeEWTSw2Cdlt8/cob5G8QDRoNfkY3BHOGkwIDAQAB
  email: marc@diagbat.com
# pas de filter
```


Exemple : filtrer toutes les factures facturX quelque soit le signataire
```
owner:
  signature_pubkey: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuhHWLJL83uDTQgnJmsxoaVmd7naTpXhGmvnqLQwcg6pih6QGyvdnAnHrgVtb2jF6LuBJoVF69YICwSDdh6Fi1aEvWcVxVSFvOTyR30j3Oh84wTkeePfhutzccLYDEE9DvFbaRQyflTRnsDV081YHdAWBq9D1TtpFPd6vw7bdQ4C9sB2rpCxwSc30tAqvgltNHvo1bXOLfPEWO7XsSsElcHQJrEUiAek2rsBD+wqTwoRckXGQuPCG+U4I7kIGwWyL4zKS4C147RVNPCeeIQ111ITLkaYHCxOuFOqGoBgMwmSuf3OntR0ZeEWTSw2Cdlt8/cob5G8QDRoNfkY3BHOGkwIDAQAB
  email: marc@diagbat.com
filter:
  ignore_owner: true
  metadata:
    facturx: any
```

Exemple : filtrer toutes les factures facturX quelque soit le signataire mais dont le destinataire est 'Total'
```
owner:
  signature_pubkey: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuhHWLJL83uDTQgnJmsxoaVmd7naTpXhGmvnqLQwcg6pih6QGyvdnAnHrgVtb2jF6LuBJoVF69YICwSDdh6Fi1aEvWcVxVSFvOTyR30j3Oh84wTkeePfhutzccLYDEE9DvFbaRQyflTRnsDV081YHdAWBq9D1TtpFPd6vw7bdQ4C9sB2rpCxwSc30tAqvgltNHvo1bXOLfPEWO7XsSsElcHQJrEUiAek2rsBD+wqTwoRckXGQuPCG+U4I7kIGwWyL4zKS4C147RVNPCeeIQ111ITLkaYHCxOuFOqGoBgMwmSuf3OntR0ZeEWTSw2Cdlt8/cob5G8QDRoNfkY3BHOGkwIDAQAB
  email: marc@diagbat.com
filter:
  ignore_owner: true
  metadata:
    facturx:
        client:
            name: Total
```
