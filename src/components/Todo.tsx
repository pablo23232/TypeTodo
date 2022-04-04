import {FC,InputHTMLAttributes} from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';


interface TodoProps{
    id: number;
    task: string;
    completed: boolean;
    toggleTodo(id:number):void;
}

const Todo: React.FC<TodoProps> = ({id,task,toggleTodo}) =>{
    const todoId:string=`${id}`;

    const handleCheck= () => {
        toggleTodo(id);
    };


    return(
        <Card style={{marginBottom:10}}>
            <Card.Body>
                <input id={todoId} style={{marginRight:5}} type={"checkbox"} onChange={handleCheck}></input>
                {task}
            </Card.Body>
        </Card>
    );
} 
  
  
  export default Todo;