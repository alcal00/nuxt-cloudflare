# YAML content

The paxpar reference objects are defined in YAML.

## repo of schemas

The paxpar schemas are store in a private gitlab repo : https://gitlab.com/paxpar/schemas

The generated JSON schmea are public.

They are accessible from those URLs :

* [https://paxpar.gitlab.io/schemas/](https://paxpar.gitlab.io/schemas/) : gitlab pages
* [https://paxpar.tech/schemas/](https://paxpar.tech/schemas/) : gitlab pages thru paxpar portal (NOT IMPLEMENTED YET)


## yaml vs code extention

To ease YAML content creation use the redhat YAML extension for VS code.

You can associate JSON schema to any YAML file you are editing
to check while you are typing if your YAML content is valid
against the given JSON schema.

One way to [associate to a JSON schema](https://github.com/redhat-developer/vscode-yaml#associating-schemas) is by adding a *modeline* in the head of your YAML file :

Example For a checklist :
```yaml
# yaml-language-server: $schema=https://paxpar.gitlab.io/schemas/checklist-2.0.schema.json
```

Example for a craftform :
```yaml
# yaml-language-server: $schema=https://paxpar.gitlab.io/schemas/craftform-1.0.schema.json
```


## schemastore.org

TODO: register our schemas with https://www.schemastore.org/json/
