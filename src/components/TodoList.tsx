import Todo from "./Todo";
import React from "react";

export interface Todo {
    id:number;
    task:string;
    completed:boolean;
}

interface TodoListProps{
    todos: Todo[];
    toggleTodo(id:number):void;
}
  
const TodoList: React.FC<TodoListProps>=({todos,toggleTodo}) => <ul>{todos.map((todo) => (
    <li style={{listStyle:"none"}}>
        <Todo id={todo.id} task={todo.task} completed={todo.completed} toggleTodo={toggleTodo}/>
    </li>
))}</ul>


export default TodoList;

