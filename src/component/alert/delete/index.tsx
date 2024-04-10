import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ErrorOutlineButton,  SecondaryButton } from '../../../utils/custom';
import { webColors } from '../../../assets/constant';
import { Trash2 } from 'lucide-react';
import { GlobalData } from '../../../contextapi';
// {open=false, setOpen,action,title,description}:any
export default function AlertDelete() {
  let {alertDelete,setalertDelete,deteleAction} = React.useContext(GlobalData);
  const handleClose = () => {
    setalertDelete(false);
  };

  return (<React.Fragment>

      <Dialog
        open={alertDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className='d-flex align-items-center' id="alert-dialog-title">
       <div className='rounded-circle d-flex justify-content-center align-items-center me-2' style={{background : webColors['secondary-red'] , height : 24 , width : 24}}><Trash2 size={16} color='white' /></div>  <span className='fs-18-700 my-auto' style={{color : webColors['secondary-red'] , fontWeight : 700}}>{"Are you sure?"}</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          { "You are about to permanently delete the selected Holiday type  from Holiday lists. Do you want to delete it anyway?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <ErrorOutlineButton className='rounded-1' onClick={handleClose} autoFocus>
        Cancel
          </ErrorOutlineButton>
          <SecondaryButton className='rounded-1' onClick={deteleAction} >Delete</SecondaryButton>
         
        </DialogActions>
      </Dialog>
    
    </React.Fragment>);
}