# drop_file()

Handle the dropped file (if there is one).

This function must returns an instance of [UploadStatus](#return-uploadstatus).

::ppw-mermaid
---
def: |
    flowchart TD
        drop_file --> drop_file_pdf
        drop_file_pdf --> own_schema["drop_file_pdf_schema_self"]
        drop_file_pdf --> drop_file_pdf_schema
        drop_file_pdf --> drop_file_pdf_schema_none
        drop_file --> drop_file_xlsx
        drop_file --> file_ext["drop_file_{ext}"]
        drop_file --> drop_unknown_file
---
::

# drop_file_pdf()

When a PDF file is dropped the `drop_file_pdf` function is called.

If not overridden in the user script, this function will first inspect the PDF.

If a schema is found in the PDF and that schema is the same as the current craftform,
the function [`drop_file_pdf_schema_self`](#drop_file_pdf_schema_self) is called.

If a schema is found in the PDF and that schema is different from the one of the current craftform,
the function [`drop_file_pdf_schema`](#drop_file_pdf_schema) is called.

If we find no schema, the function [`drop_file_pdf_schema_none`](#drop_file_pdf_schema_none) is called.

This function must returns an instance of [UploadStatus](#return-uploadstatus).


# drop_file_pdf_schema_self()

If not overridden in the user script, this function will extract the metadata value of the dropped PDF and replace the current values of the form.

The PDF will not be saved in the form session.

This function must returns an instance of [UploadStatus](#return-uploadstatus).


# drop_file_pdf_schema()

If not overridden in the user script, this function will accept the PDF and save it in the form session.

This function must returns an instance of [UploadStatus](#return-uploadstatus).


# drop_file_pdf_schema_none()

If not overridden in the user script, this function will accept the PDF and save it in the form session.

This function must returns an instance of [UploadStatus](#return-uploadstatus).


# drop_file_excel()

::alert{type="info"}
TODO: Need to be documented
::

This function must returns an instance of [UploadStatus](#return-uploadstatus).


# drop_file_\{ext\}()

::alert{type="info"}
TODO: Need to be documented
::

This function must returns an instance of [UploadStatus](#return-uploadstatus).


# drop_unknown_file()

::alert{type="info"}
TODO: Need to be documented
::

This function must returns an instance of [UploadStatus](#return-uploadstatus).


# return UploadStatus

All the [`drop_*` functions](#drop_file) should return an `UploadStatus`.
It will give to the client form some information on how the upload was proceed and what to do client-side.

Sample :
```yaml
status: accepted
stored: true
msg: "Your order document #344 has been added"
```

## .status

::alert{type="info"}
TODO: Need to be documented
::


## .stored

::alert{type="info"}
TODO: Need to be documented
::


## .extra_files

::alert{type="info"}
TODO: Need to be documented
::


## .form_overload

::alert{type="info"}
TODO: Need to be documented
::


## .msg

The message explaining to the user how the upload happened.


## .schema

::alert{type="info"}
TODO: Need to be documented
::


## .needed_options

::alert{type="info"}
TODO: Need to be documented
::
