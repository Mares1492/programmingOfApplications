import todo from "../store/todo"
import { observer } from "mobx-react-lite"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, Box, TextField, FormControlLabel, FormGroup, Checkbox, InputLabel, Select } from "@mui/material"
import { useState } from "react"
import dayjs from "dayjs"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import MenuItem from "@mui/material/MenuItem"
const now  = dayjs()

export const Todo = observer(() => {
    const [input,setInput] = useState("")
    const [date,setDate] = useState(now)
    const [priority,setPriority] = useState(0)

    const handleAddTodo = () => {
        if (input){
            const newTodo= {
                id: todo.todos.length + 1,//lol but works for now
                title: input,
                priority:priority,
                date:date,
                completed: false
            }
            todo.addTodo(newTodo)
            setInput("")
        }
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
                    alignItems:"center",
                    color: 'gray'}}>
            {todo.todos.map(t=>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
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
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{
                        display:"flex",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                    inputFormat = 'DD/MM/YYYY'
                    minDate={now}
                    label="Choose date to complete"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField sx={{maxWidth:'25%',alignSelf:"center",justifySelf:"center",marginTop:"2rem"}} {...params} />}
                />
            </LocalizationProvider>
            <InputLabel sx={{marginTop:"1rem"}} id="priority-label">Choose priority</InputLabel>
            <Select
                sx={{
                    marginTop:"0.7rem",
                    maxWidth:"25%",
                    alignSelf:"center",
                    justifySelf:"center"

            }}
                labelId="priority-label"
                id="priority-label-select"
                value={priority}
                label="Age"
                onChange={e=>setPriority(e.target.value)}
            >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
            </Select>
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
