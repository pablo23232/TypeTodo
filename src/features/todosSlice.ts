import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "../components/TodoList"


interface TodosState {
    todos:Todo[]
}

const initialState: TodosState={
    todos:[]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action:PayloadAction<Todo>) =>{
            state.todos=[];
            state.todos=state.todos.concat(action.payload);
            console.log(state.todos);
        },
        modifyTodo: (state, action:PayloadAction<Todo>) =>{
            state.todos = state.todos.map((todo)=>todo.id===action.payload.id 
            ?{...todo,id:action.payload.id,task:action.payload.task,priority:action.payload.priority,completed:action.payload.completed}:todo);
            console.log(state.todos);
        },
        deleteTodo:(state, action:PayloadAction<number>) =>{
            const index = state.todos.findIndex(todo=>todo.id===action.payload);
            state.todos= state.todos.splice(index,1);
            console.log(state.todos)
        },
    }
})

export const {addTodo,modifyTodo,deleteTodo} = todosSlice.actions
export const selectTodo = (state:TodosState) => state.todos.values
export default todosSlice.reducer