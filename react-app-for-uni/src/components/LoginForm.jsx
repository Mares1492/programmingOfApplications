import { useContext, useState } from "react"
import { UserContext, TogglesContext } from "../index"
import { Button, Modal, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import { observer } from "mobx-react-lite"


const myButton = {
    borderBottom:"2px black solid",
    color:"black",
    borderRadius: "0",
    '&:hover': {
        color:"#710C04"
    }
}

export const LoginForm = observer(() => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {store} = useContext(UserContext)
    const {toggles} = useContext(TogglesContext)

    const handleLogin = ()=>{
        store.login(email,password)
            .then(()=>setEmail(''))
            .then(()=>setPassword(''))
            .then(()=>toggles.setShowLogInWelcomeMessage(true))
            .then(()=>toggles.setShowLogRegForm(false))
    }
    const handleRegistration = () =>{
        store.registration(email,password)
            .then(()=>setEmail(''))
            .then(()=>setPassword(''))
            .then(()=>toggles.setShowLogRegForm(false))
    }

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
                    '&:hover': {
                       transform:"scale(1.1)"
                   },
                    top: 0,
                    margin:'auto',
                    left: 0,
                    maxWidth:"50%",
                    backgroundColor:"white",
                    border:"solid black 2px"
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
                    <Button sx = {myButton} onClick={()=>handleLogin()}>Log in</Button>
                    <Button sx = {myButton} onClick={()=>handleRegistration()}>Register</Button>
                </Box>
            </Box>
        </Modal>
    )
})