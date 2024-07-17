# behaviour

Craftform API


Sample data :
* {craft_id} = frozen.temp.mes_ordre_inter.base.craftform
* {session_path} = craft/{craft_id} = craft/frozen.temp.mes_ordre_inter.base.craftform

* `GET {FRONTEND}/craft/{craft_id}` main craft page
* `GET {BACKEND}/api/craftform/{craft_id}` get craft def
* `POST {BACKEND}/api/craft/file/{craft_id}` call on a file drop
* `POST {BACKEND}/api/craft/{craft_id}` generate PDF (preview or finalize)
* `GET /api/files/session/{session_path}` get user session files
* `DELETE /api/files/session/{session_path}` delete user session files
* `GET {BACKEND}/api/craft/{craft_id}/output.pdf` the generated PDF file


Main craftform behaviour
* user [change](#change_behaviour) an input field
* user [upload](#upload_behaviour) a file
* user [preview](#preview_behaviour) the generated PDF
* user [finalize](#finalize_behaviour) the generated PDF
* user [reset](#reset_behaviour) the form


## change_behaviour

* user change a field and leave focus on this field
* ...

## upload_behaviour


* user drop a file on the form drop zone `<ppw-dropfile-main2>`
* `POST {BACKEND}/api/craft/file/{craft_id}` called
    * `lib.file_post()`
        * `ctx.script_exec(.. "drop_file" ..)`
        * `session.store_fileobj()`
        * `form_data_store()`
* `FRONTEND:onFileChange()` called

## preview_behaviour

* user click the preview button
* `FRONTEND:doPreview()`
    * `FRONTEND:generateDocument()`
        * `POST {BACKEND}/api/craft/{craft_id}` generate PDF
            * `lib.form_data_store(..)`
            * `tools.generate_files()`
                * `with tempfile ...`
                    * `tools2.CraftContext()`
                    * `tools2.grab_context_from_storage_to_local_temp()`
                    * `process_dropped_files()`
                        * `ctx.script_exec(.. "drop_file_pdf" ..)`
                        * `ctx.script_exec(.. "drop_file_excel" ..)`
                    * `ctx.script_exec(.. "template_get" ..)`
                    * `ctx.script_exec(.. "generate_pdf" ..)`
                    * `generate_pdf_post()`
                    * `ctx.script_exec(.. "generate_metadata" ..)` (optional)
                    * `generate_metadata_post()`
                    * `if finalize:`
                        * `ctx.script_exec(.. "generate_signature" ..)`
                        * `generate_signature_post()`
                    * `session.store_fileobj()`

* .. open preview dialog ?
    * `GET {BACKEND}/api/craft/{craft_id}/output.pdf` the generated PDF file

## finalize_behaviour

Same as preview_behaviour.

## reset_behaviour

