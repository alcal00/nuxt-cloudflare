# shortcuts import with a LOT of usefull stuff
from paxpar.shortcuts.craft import *


async def drop_file_xlsx(ctx: CraftContext, upload_file: UploadFile):
    '''
    This function is called when a file with '.xlsx' extension is dropped.
    We provide this function since we want to override the default behaviour.
    '''

    # we open the Excel file
    wb = openpyxl.load_workbook(filename=upload_file.file)

    # we read some cells value
    value_a = wb['Sheet1']['A2'].value
    value_b = wb['Sheet1']['B2'].value
    value_c = wb['Sheet1']['C2'].value

    # Return the form fields to fill as a dict
    # since we return a dict, the file is consumed (not stored)
    # and will vanish from the drop zone
    return {
        'a': value_a,
        'b': value_b,
        'c': value_c,
        }
