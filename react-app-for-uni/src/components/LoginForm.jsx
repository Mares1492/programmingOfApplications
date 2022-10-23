import { useContext, useState } from "react"
import { Context, TogglesContext } from "../index"
import { Button, Modal, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import { observer } from "mobx-react-lite"

const textFieldStyle = {
    backgroundColor:"white",
    color:"black",
    borderRadius:"13%"
}
const myButton = {
    borderBottom:"2px black solid",
    color:"black",
    borderRadius: "0"
}

export const LoginForm = observer(() => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {store} = useContext(Context)
    const {toggles} = useContext(TogglesContext)

    return (
        <Modal
            open={toggles.showLogRegForm}
            onClose={()=>toggles.setShowLogRegForm(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            closeAfterTransition
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    transition:"all 600ms",
                    //'&:hover': {
                   //     transform:"scale(1.1)"
                   // },
                    top: 0,
                    margin:'auto',
                    left: 0,
                    maxWidth:"50%",
                    backgroundColor:"white",
                    border:"solid black 2px",
                    borderRadius:"3%"
                }}
                noValidate
                autoComplete="off"
                textAlign="center"
            >
                <TextField
                    required
                    id="email-input"
                    label="Email"
                    variant="standard"
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                    type="text"
                />
                <TextField
                    required
                    id="password-input"
                    label="Password"
                    variant="standard"
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    type="password"
                />
                <Box>
                    <Button sx = {myButton} onClick={()=>store.login(email,password)}>Log in</Button>
                    <Button sx = {myButton} onClick={()=>store.registration(email,password)}>Register</Button>
                </Box>
            </Box>
        </Modal>
    )
})