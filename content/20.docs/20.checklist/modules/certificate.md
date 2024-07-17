# certificate

Certificate checkmodule arguments :

* blacklist (WIP) : list of blacklisted signers/certificates
* check_no_annotation : no annotations allowed
* check_valid_signature : check if the signature is valid
* common_name (WIP) : common name of the signer
* email_suffix : email suffix of the the signer
* eu_list (WIP) : the signer root certificate must be on the Europe list
* position : position/order of the signature
* signature_pubkey : pub key of the signer certificate
* unique : only one signature from this signer
* whitelist (WIP) : list of whitelisted signers/certificates

# signature_pubkey

TODO: move old doc here

In the following exampl we ensure that Jacques signature has the following public key :

```
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp+yIQB9JFml7aVb4kdsfCM1FXtNcZ/fxRFMI6PvCqlDZRNfzEEMqvb+cOsBrRSBi4WX9EuDVva6xfPzNmVOpTNlOYUr2PJJfe6OKZAYUvyw0P3kx9yoSlP2zvwsZXFTgN8U8kO51KPwpnxFve7DgQUJ395dmL3zLYdvKWCBHpJA/qaHLPzD/mTr0Umd0prUArwMmHx2sI/0u2ONDhLkjQq9b6XfurPFU5CXjRVuSQm4c+CokE8wNQkE+vt0pFOPjtgcLWIzNQO88D7G41vmxCtg4HkRmuujpWKYjcIgklkhI5QEHJlen9FY26W+I5KRkr8JNvAQY1h6V1NyAvnLBrQIDAQAB
```

```yaml
  - title: Signature Médecin
    desc: |
      Signature du Docteur Jacques Marchand
    module: paxpar.services.core.mycheck.module.certificate
    args:
      signature_pubkey: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp+yIQB9JFml7aVb4kdsfCM1FXtNcZ/fxRFMI6PvCqlDZRNfzEEMqvb+cOsBrRSBi4WX9EuDVva6xfPzNmVOpTNlOYUr2PJJfe6OKZAYUvyw0P3kx9yoSlP2zvwsZXFTgN8U8kO51KPwpnxFve7DgQUJ395dmL3zLYdvKWCBHpJA/qaHLPzD/mTr0Umd0prUArwMmHx2sI/0u2ONDhLkjQq9b6XfurPFU5CXjRVuSQm4c+CokE8wNQkE+vt0pFOPjtgcLWIzNQO88D7G41vmxCtg4HkRmuujpWKYjcIgklkhI5QEHJlen9FY26W+I5KRkr8JNvAQY1h6V1NyAvnLBrQIDAQAB
```

# position

TODO: move old doc here

Here is an example where we check the presence of 2 signatures in a given order :
Jacques **must** be the firt signer, Arnaud **must** be the second signer :

```yaml
  - title: Signature Médecin
    desc: |
      Signature du Docteur Jacques Marchand
    module: paxpar.services.core.mycheck.module.certificate
    args:
      position: 1
      signature_pubkey: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp+yIQB9JFml7aVb4kdsfCM1FXtNcZ/fxRFMI6PvCqlDZRNfzEEMqvb+cOsBrRSBi4WX9EuDVva6xfPzNmVOpTNlOYUr2PJJfe6OKZAYUvyw0P3kx9yoSlP2zvwsZXFTgN8U8kO51KPwpnxFve7DgQUJ395dmL3zLYdvKWCBHpJA/qaHLPzD/mTr0Umd0prUArwMmHx2sI/0u2ONDhLkjQq9b6XfurPFU5CXjRVuSQm4c+CokE8wNQkE+vt0pFOPjtgcLWIzNQO88D7G41vmxCtg4HkRmuujpWKYjcIgklkhI5QEHJlen9FY26W+I5KRkr8JNvAQY1h6V1NyAvnLBrQIDAQAB
  - title: Signature Pharmacie
    desc: |
      signature de Arnaud Lecomte Pharmacien
    module: paxpar.services.core.mycheck.module.certificate
    args:
      position: 2
      signature_pubkey: MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi93K2YJkdycJ7nMkgWFlFcLxF/SYph9ze+iY9OBf2XJ7CAD828lWwk91kJpcurt8j9GVkZzKParfaVUX+D0nzOI1NG5O6OO1KuwKE/lOAGpnk1/RP05A9BPybnIBYWRsrE2Du33lXvTYXk8nQEOaPXRJsJnLylW0sB4W2CtGAP7RO5mSm9mPOWIKh7ZFqDvKsIwZzP7KaRluLnlyuAdQplQ/Fi+AEIASfuv7aYDHaKrk2dmMxTJlBVh1piBqd8tXmE1P+PbGR3r6FpnQxtSnySlaKS/bTwZobp9T1XEb4Pk6B03vopOHY7RO+ZdgDLHPAV1DODaHIrMuwhGAW6WqvQIDAQAB
```

# check_valid_signature

TODO: move old doc here

# email_suffix

TODO: move old doc here

# unique

TODO: move old doc here

# check_no_annotation

TODO: move old doc here

# whitelist

TODO: move old doc here

Target value can be one of :
* email
* pubkey
* common name

Source can be one of :
* YAML list
* URL to a YAML file
* URL to a JSON file
* URL to a XLSX file
* URL to a CSV file
* URL to a parquet file
* URL to a duckdb file
* URL to a sqlite file
* URL with parameter with a JSON result

# blacklist

TODO: move old doc here

Same as whitelist

# eu_list

TODO: move old doc here

# common_name

TODO: move old doc here
