import Todo from "./Todo";
import React from "react";

export interface Todo {
    id:number;
    task:string;
    completed:boolean;
    priority:string;
}

interface TodoListProps{
    todos: Todo[];
    toggleTodo(id:number):void;
    toggleModification(id:number,completed:boolean):void;
    toggleDelete(id:number):void;
    togglePriority(id:number):void;
}
  
const TodoList: React.FC<TodoListProps>=({todos,toggleTodo,toggleModification,toggleDelete,togglePriority}) => 
    <div style={{display: "flex" ,flexDirection:"column",height:550,marginLeft:10,justifyContent:"flex-end",alignItems:"flex-end"}}>
        <ul style={{marginBottom:0,height:700,overflowY:"scroll"}}>{todos.map((todo, index) => (
            <li key={`todo-list-${index}`} style={{listStyle:"none",width:500,marginRight:30,justifySelf:"flex-start"}}>
                <Todo id={todo.id} task={todo.task} completed={todo.completed} priority={todo.priority} toggleTodo={toggleTodo} 
                toggleModification={toggleModification} toggleDelete={toggleDelete} togglePriority={togglePriority} />
            </li>
        ))}</ul>
    </div>


export default TodoList;

