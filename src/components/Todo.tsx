import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownShortWide, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";


interface TodoProps{
    id: number;
    task: string;
    completed: boolean;
    priority:string;
    toggleTodo(id:number):void;
    toggleModification(id:number,completed:boolean):void;
    toggleDelete(id:number):void;
    togglePriority(id:number):void;
}

const Todo: React.FC<TodoProps> = ({id,task,toggleTodo,toggleModification,toggleDelete,togglePriority,completed,priority}) =>{
    const todoId:string=`${id}`;

    useEffect(() =>{
        if(completed===false){
            document.getElementById("task"+todoId)?.classList.add("unchecked");
        }
        if(completed===true){
            document.getElementById("task"+todoId)?.classList.add("checked");
        }
        if(priority==="normal"){
            document.getElementById("priority"+todoId)?.classList.add("normal");
        }
        if(priority==="moderada"){
            document.getElementById("priority"+todoId)?.classList.add("moderada");
        }
        if(priority==="urgente"){
            document.getElementById("priority"+todoId)?.classList.add("urgente");
        }
   }, [])

    const handleCheck= () => {
        
        if(completed===false){
            document.getElementById("task"+todoId)?.classList.remove("unchecked");
            document.getElementById("task"+todoId)?.classList.add("checked");
        }
        else{
            document.getElementById("task"+todoId)?.classList.remove("checked");
            document.getElementById("task"+todoId)?.classList.add("unchecked");
        }
        toggleTodo(id)
    };

    const handleClick=() =>{
        toggleModification(id,completed);
    };

    const handleClickDel=() =>{
        toggleDelete(id);
    };

    const handleKeyPri=(e: React.KeyboardEvent) =>{
        if(e.key === 'Enter'){
            handleClickPri();
          }
    };
    const handleKeyDel=(e: React.KeyboardEvent) =>{
        if(e.key === 'Enter'){
            handleClickDel();
          }
    };
    const handleKeyMod=(e: React.KeyboardEvent) =>{
        if(e.key === 'Enter'){
            handleClick();
          }
    };

    const handleClickPri=() =>{
        if(document.getElementsByClassName("")){
            document.getElementById("priority"+todoId)?.classList.add("normal");
            priority="normal"
        }
        if(priority==="normal"){
            document.getElementById("priority"+todoId)?.classList.remove("normal");
            document.getElementById("priority"+todoId)?.classList.add("moderada");
        }
        if(priority==="moderada"){
            document.getElementById("priority"+todoId)?.classList.remove("moderada");
            document.getElementById("priority"+todoId)?.classList.add("urgente");
        }
        if(priority==="urgente"){
            document.getElementById("priority"+todoId)?.classList.remove("urgente");
            document.getElementById("priority"+todoId)?.classList.add("normal");
        }
        togglePriority(id);
    };


    return(
        <Card style={{marginBottom:10}}>
            <Card.Body className="d-flex justify-content-between">
                <div style={{display:"flex"}}>
                    <input data-testid="check" id={todoId} className="check" style={{marginRight:10}} type={"checkbox"} onChange={handleCheck} checked={completed} ></input>
                    <p id={"task"+todoId} style={{margin:0}}>{task}</p>
                </div>
                <div style={{display:"flex",alignSelf:"center"}}>
                    <div data-testid="priorityBox" id={"priority"+todoId} style={{width:30,height:17}} className={priority}></div>
                    <FontAwesomeIcon data-testid="priority" className={todoId} icon={faArrowDownShortWide} style={{marginLeft:10, color:"grey"}} onClick={handleClickPri} 
                    onKeyDown={handleKeyPri} tabIndex={0}/>
                    <FontAwesomeIcon data-testid="modify" className={todoId} icon={faPenToSquare} style={{marginLeft:10, color:"grey"}} onClick={handleClick} 
                    tabIndex={0} onKeyDown={handleKeyMod} />
                    <FontAwesomeIcon data-testid="delete" className={todoId} icon={faTrashCan} style={{marginLeft:10, color:"grey"}} onClick={handleClickDel} 
                    tabIndex={0} onKeyDown={handleKeyDel}/>
                </div>
            </Card.Body>
        </Card>
    );
} 
  
  export default Todo;