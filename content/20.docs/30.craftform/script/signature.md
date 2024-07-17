# Signature




## generate_signature()

The function must return a [generateSignatureStatus()](#return-generatesignaturestatus).

::alert{type="info"}
TODO: Need to be documented
::


## return GenerateSignatureStatus


Describe the signature(s) that will applied on a document.

A single or many signatures.
Internal or external signatures.
Immediate or diffred signatures.


Example with 3 signers (2 mandatory)
```yaml
fullname: "Alice Atson"
email: alice.atson@gmail.com
phone: "+33655671942"
reason: tenant
provider: "yousign"
next:
    fullname: "Bob Branco"
    email: bob.branco@gmail.com
    phone: "+33657771942"
    reason: landlord
    provider: "chambersign"
    next:
        fullname: "Bob Branco"
        email: bob.branco@gmail.com
        phone: "+33657771942"
        reason: broker
        provider: "chambersign"
        mandatory: false

# fork: Optional[GenerateSignatureStatus]
```


### .consensus_signature

consensus_signature: Optional[int]


* consensus_signature=0 : No consensus, all mandatoy signatures must be present
* consensus_signature=1 : This signature is enough to reach the consensus
* consensus_signature=2 : Consensus of 2 signer, Need 1 more signer
* consensus_signature=3 : Consensus of 3 signer, Need 2 more signers
* consensus_signature=n : Consensus of n signer, Need n-1 more signers

::alert{type="info"}
TODO: Need to be documented
::



## fork signature


::alert{type="info"}
TODO: Need to be documented
::

How to handle a single source documnent that need to be signed by several peoeple.
But they will sign a different instance of the document.

Should probabley be handled also at the document generation step !!

Example : a trainer with 10 trainees, a single master doucment generate 10 docs ...

Example : re-insurance with a cedent and 10 re-insurers, ...

Example with document fork :
```yaml
# fork: Optional[GenerateSignatureStatus]
```


