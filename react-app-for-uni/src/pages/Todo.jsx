import todo from "../store/todo"
import { observer } from "mobx-react-lite"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Input, Button, Box, TextField, FormControlLabel, FormGroup, Checkbox } from "@mui/material"
import { useState } from "react"


export const Todo = observer(() => {
    const [input,setInput] = useState("")

    const handleAddTodo = () => {
        const newTodo= {
            id: todo.todos.length + 1,//lol but works for now
            title: input,
            completed: false
        }
        todo.addTodo(newTodo)
    }

    return (
        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            display:"flex",
            flexDirection:"column"
        }}>
            <Button onClick={()=>todo.fetchTodos()}>fetch TODO list</Button>
            <FormGroup sx={{
                    display:"flex",
                    textAlign:"center",
                    justifyContent:"center",
                    alignItems:"center",
                    color: 'gray'}}>
            {todo.todos.map(t=>
                <Box sx={{display:"flex",flexDirection:"row"}}>
                    <FormControlLabel
                        sx={{fontSize:"large"}}
                        control={<Checkbox />}
                        label={`${todo.todos.indexOf(t)+1}.${t.title}`}
                        checked={t.completed}
                        onChange={()=>todo.completeTodo(t)}
                        labelPlacement="start"
                        key = {t.id+t._id}
                    >
                </FormControlLabel>
                <Button  onClick={()=>todo.removeTodo(t)}><DeleteForeverIcon/></Button>
                </Box>
            )}
            </FormGroup>
            <TextField
                label="Add new TODO"
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder="Do something important"
                sx={{marginTop:"1em",marginLeft:"1em",maxWidth:'25%',alignSelf:"center",justifySelf:"center"}}
            />
            <Button
                sx={{
                    color:"white",
                    backgroundColor:"black",
                    textShadow:"2",
                    maxWidth:'10%',
                    alignSelf:"center",
                    justifySelf:"center",
                    marginTop:"0.7rem",
                    '&:hover': {
                        backgroundColor:"#710C04"
                    },
                    '&:active': {
                        backgroundColor:"white",
                    }
                }}
                autoComplete="off"
                variant="contained"
                onClick={()=>handleAddTodo()}
            >ADD</Button>
        </Box>
    )
})
