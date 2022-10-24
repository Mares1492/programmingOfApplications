import { makeAutoObservable } from "mobx"

class Todo{
    todos=[
        {id:1,title:"get a life",completed:false},
        {id:2,title:"be good",completed:false},
        {id:3,title:"stay safe",completed:false},
        {id:4,title:"stay alive",completed:false}
    ]
    constructor() {
        makeAutoObservable(this)
    }
    addTodo(todo){
        this.todos.push(todo)
        console.log(`${todo.title} added`)
    }
    removeTodo(td){
        this.todos = this.todos.filter(todo=>todo!==td)
    }
    completeTodo(td){
        this.todos = this.todos.map(todo =>todo === td?{...todo,completed:!todo.completed}:todo)
    }
    fetchTodos(){
        fetch('//localhost:5000/todo')
            .then(response=>response.json())
            .then(json => this.todos = [...json])
    }
}
export default new Todo()