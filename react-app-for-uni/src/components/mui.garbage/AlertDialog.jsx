import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from "react"
import { TogglesContext, UserContext } from "../../index"
import { observer } from "mobx-react-lite"

const AlertDialog = () =>{
    const {toggles} = useContext(TogglesContext)
    const {store} = useContext(UserContext)

    return (
        <div>
            <Dialog
                open={toggles.showLogInWelcomeMessage}
                onClose={()=>toggles.setShowLogInWelcomeMessage(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Welcome to the WeB Tra1ning ${store.isAuth?store.user.email:"Anon"}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        We are really happy to see you here!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>toggles.setShowLogInWelcomeMessage(false)} autoFocus={true}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default observer(AlertDialog)