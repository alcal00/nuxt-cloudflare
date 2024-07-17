# perm service

Act as the proxy to enforce permissions when calling the other services.

The perm service, with auth, are the only services behing the portal service
(when perm mode is on).

## extra headers

Extra headers are added before calling backend.
The values of those headers are extracted from the JWT token.
So there is no need for the backend service to decode the token.

The extra headers are :

* `pp-email` : TODO: to be implemented
* `pp-domain` : TODO: to be implemented
* `pp-roles` : TODO: to be implemented
* `pp-credit` : TODO: to be implemented
