# format fields

The `title`, `name`, `desc` and `content` props may contains templating tags.

For example, the title `I have {{ 2 + 1 }} documents`
will be rendered as `I have 3 documents`.

The paxpar engine use the jinja2 library.

The context properties available in the template are :

* `children` : the node children (`self.children`)
* `root` : the root node of the checklist in its current state (`self.root`)
* all props of the node

Some functions are also exposed :

* `len()`

TODO:
* expose `node`
* expose `children`
