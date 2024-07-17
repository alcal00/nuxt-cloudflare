## Front Permissions

Every route is checked.

3 rules sets are involved :
* common rules for front routes (enforced in front paxpar-widgets)
* delegated rules for front routes (enforced in the given paxpar front site)
* common rules for API routes (enforced back/server-side)



### common front rules 

Restrict access by roles/permissions.

Here is a list of path and required permission :

* `/` requires permission `FRONT_CONTENT`
* `/docs` requires permission `FRONT_CONTENT_DOCS`
* `/docs/user` requires permission `FRONT_CONTENT_DOCS_USER`
* `/docs/author` requires permission `FRONT_CONTENT_DOCS_AUTHOR`
* `/docs/dev` requires permission `FRONT_CONTENT_DOCS_USER`
* `/docs/host` requires permission `FRONT_CONTENT_DOCS_HOST`
* `/docs/team` requires permission `FRONT_CONTENT_DOCS_TEAM`
* `/priv` requires permission `FRONT_CONTENT_PRIV`

Example :

* A source file `/content/docs/info.md` will require permission `FRONT_CONTENT_DOCS`
* A source file `/priv/toto/titi/tata.md` will require permission `FRONT_CONTENT_PRIV`

### custom front rules

To customize front rules, edit the ` app.config.ts` file :

In the following sample configuration every route of the form `/usage/*`
will require the permission `FRONT_CONTENT_TEAM` :


```typescript
export default defineAppConfig({
    // ...
    paxpar: {
        // ...
        permission: [
            {
                path: '/usage',
                permission: 'FRONT_CONTENT_TEAM',
            },
        ],
        // ...
    }
    // ...
```

### delegated front rules 

TODO: work in progress




## Back Permissions

### common API rules 

TODO: work in progress


## JWT

All the roles and permissions of the current user are encoded
in the JWT token issued at the login phase.

You can see the content of the token in the progile page `/settings`.

You can also decode the JWT token at [jwt.io](https://jwt.io/).

Here is an example of a raw JWT token :

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjgwODY1MjgwLCJzdWIiOiIxYWZlZDRjZC03MjRlLTRlNzQtOGVhMS05MGVkNjUwMzE3MDEiLCJlbWFpbCI6InBoaWxpcHBlLmVudHptYW5uQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnsicGVybWlzc2lvbnMiOlsiRlJPTlRfQ09OVEVOVF9ET0NTX1RFQU0iXSwieCI6MjJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTY4MDg2MTY4MH1dLCJzZXNzaW9uX2lkIjoiMmRlZjlhZjctOGYzZi00OWVlLWFmNDAtZjkyM2Q0ZDA5NDkyIn0.-T5pgZ_8r9ku6m0C9YutmJAltX8VjDiF3-PDZ5AfzTs
```

The decoded payload :

```json
{
  "aud": "authenticated",
  "exp": 1680865280,
  "sub": "1afed4cd-724e-4e74-8ea1-90ed65031701",
  "email": "philippe.entzmann@gmail.com",
  "phone": "",
  "app_metadata": {
    "provider": "email",
    "providers": [
      "email"
    ]
  },
  "user_metadata": {
    "permissions": [
      "FRONT_CONTENT_DOCS_TEAM"
    ],
    "x": 22
  },
  "role": "authenticated",
  "aal": "aal1",
  "amr": [
    {
      "method": "otp",
      "timestamp": 1680861680
    }
  ],
  "session_id": "2def9af7-8f3f-49ee-af40-f923d4d09492"
}
```

The `user_metadata.permissions` part contains the permissions list :

```json
"user_metadata": {
    "permissions": [
      "FRONT_CONTENT_DOCS_TEAM"
    ],
  },
```

When the user logs in.
The JWT token is forged with the payload build from a database query.

## Manage user roles/permissions

User roles/permissions are managed in the database : table `auth.users`,
column `raw_user_meta_data`.


You can manage the database via [pgadmin](https://phec.net/pga)
or the [supabase console](https://app.supabase.com/projects#).


Sample SQL queries to manage permissions :

```
update auth.users 
set raw_user_meta_data = '{"permissions":["FRONT_CONTENT_DOCS_TEAM"]}' where email='francoise@paxpar.tech' ;


select id, email, aud, role, raw_user_meta_data from auth.users where email='francoise@paxpar.tech' ;
```

## Default permissions

Default permission for non-logged user :

```typescript
const NOT_LOGGED_PERSMISSIONS = [
  'FRONT_CONTENT',
  'FRONT_CONTENT_DOCS',
  'FRONT_CONTENT_DOCS_USER'
]
```