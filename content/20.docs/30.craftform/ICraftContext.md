
# ICraftContext

`ICraftContext` is an interface for [CraftContextModel](#CraftContextModel) with some usefull methods.

## CraftContextModel

Main craft context properties are :

* [`craft: CraftFormInfo`](#craftforminfo)
* `files: List`
* `form_data: dict`
* `base_api: str`
* `temp_folder: str`
* `session: Any  # Session`
* `session_id: Optional[str]`
* `finalize: bool = False`

## CraftFormInfo

* `id: str`
* `path: str` : relative path to the craft folder assets
* `pathfull: Path` : full path to the craft folder assets
* `namespace: str`
* `craft_schema: dict`
* `schema_url: str` : full schema URL as stored in generated PDF with meta.yaml (ex: https://paxpar.tech/schema/frozen.carnet2.carnet.craftform/2)
* `script_module: Any`
