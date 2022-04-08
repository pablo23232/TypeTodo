import React, {useState} from "react";
import { useEffect } from "react";
import Input from "./components/Input"
import TodoList, { Todo } from "./components/TodoList";
import APIService from "./services/APIService";
import Popup from "./components/Popup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus} from "@fortawesome/free-solid-svg-icons";

let id:number=0;

const TODO_END_POINT = "/todos"

const App : React.FC = () => {

    let updateTodo:Todo;

    const [texto,setTexto] = useState(String);

    const [boolAdd,setboolAdd] = useState(false);

    const [show,setShow] = useState(false);

    const [completed,setComp] = useState(false);

    const [showDel,setShowDel] = useState(false);

    const [todoID,settodoID] = useState(Number);

    const [priority,setPriority] = useState(String);

    const [todos, setTodos] = useState<Todo[]>([]);

    const getTodos = () => APIService.get(`${TODO_END_POINT}`);

    const postTodos = (todo:Todo) => APIService.post(`${TODO_END_POINT}`,{task:texto,completed:false});

    const deleteTodos = (todoID:number) => APIService.delete(`${TODO_END_POINT}/${todoID}`);

    const putTodos = (todoID:number,todo:Todo) => APIService.put(`${TODO_END_POINT}/${todoID}`,updateTodo);

    useEffect(() =>{
         async function asyncFunction() {
            try {
                const response:any = await getTodos();
                setTodos(response.data);
            } catch (error) {
            console.log(error)
            }
        }
        asyncFunction();
    }, [])

    useEffect(() =>{
        async function asyncFunction() {
           try {
               const response:any = await getTodos();
               setTodos(response.data);
           } catch (error) {
           console.log(error)
           }
       }
       asyncFunction();
   }, [boolAdd])

    function handleChange(inputvalue:string){
        setTexto(inputvalue);
    };

    function onKeyPress(e: React.KeyboardEvent){
        if(e.key==="Enter"){
            buttonAdd();
        }
    }

    function modTodo(){
        const newArr = [...todos];
        const newElement ={id:todoID,task:texto,priority:priority,completed:completed};
        const index=newArr.findIndex((todo) => todo.id ===newElement.id);
        const repeate =todos.find((todo) => todo.task === texto);
        if(repeate===undefined && texto!==""){
            newArr.splice(index,1,newElement);
            setTodos(newArr);
            updateTodo=newElement;
            putTodos(newElement.id,updateTodo);
            setTexto("");
            editPopup();
        }
        if(repeate!==undefined){
            alert("No se pueden poner el nombre de una tarea ya existente")
        }
        
    }
    function toggleTodo(id:number):void{
        const newTodos = [...todos];
        const todo:Todo= newTodos.find((todo)=> todo.id ===id)!;
        todo.completed=!todo.completed
        setComp(todo.completed);
        const index=newTodos.findIndex((todo) => todo.id ===id);
        newTodos[index].completed=todo.completed;
        updateTodo=newTodos[index];
        setTodos(newTodos);
        putTodos(newTodos[index].id,updateTodo);
    };

    function togglePriority(id:number){
        const newTodos = [...todos];
        const todo:Todo= newTodos.find((todo)=> todo.id ===id)!;
        let bool =false;
        if(todo.priority==="normal" && bool===false){
            todo.priority="moderada";
            bool=true;
        }
        if(todo.priority==="moderada" && bool===false){
            todo.priority="urgente";
            bool=true;
        }
        if(todo.priority==="urgente" && bool===false){
            todo.priority="normal";
            bool=true;
        }
        setPriority(todo.priority);
        const index=newTodos.findIndex((todo) => todo.id ===id);
        newTodos[index].priority=todo.priority;
        updateTodo=newTodos[index];
        setTodos(newTodos);
        putTodos(newTodos[index].id,updateTodo);
    }

    function toggleModification(id:number,completed:boolean):void{
        settodoID(id);
        setComp(completed);
        editPopup();
    }

    function toggleDelete(id:number):void{
        settodoID(id);
        deletePopup();
    }

    function editPopup():void{
        setShow(!show);
        setTexto("");
    }

    function deletePopup():void{
        setShowDel(!showDel);
        setboolAdd(!boolAdd);
    }

    function buttonAdd():void  {
        const repeate =todos.find((todo) => todo.task === texto);
        if(repeate===undefined && texto!==""){
            const newElement ={id:id,task:texto,priority:priority,completed:false};
            setTodos([...todos, newElement]);
            postTodos(newElement);
            setboolAdd(!boolAdd);
            setTexto("");
        }
        if(repeate!==undefined){
            alert("No se pueden introducir tareas repetidas")
        }
        if(texto===""){
            alert("No se pueden introducir tareas vacias")
        }
    };
    
    function buttonDel():void{
        const newArr = [...todos].filter((todos) => todos.id !==todoID);;
        setTodos(newArr);
        deleteTodos(todoID);
        deletePopup();
    }

    return (
        <React.Fragment>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center", width:600,paddingTop:40}}>
                <Input onChange={handleChange} onKeyPress={onKeyPress} texto={texto}/>
                <TodoList todos={todos} toggleTodo={toggleTodo} toggleModification={toggleModification} toggleDelete={toggleDelete} 
                togglePriority={togglePriority}/>
                <div style={{display:"flex",flexDirection:"row",gap:10,marginTop:5}}>
                    <FontAwesomeIcon icon={faCirclePlus} style={{color:"rgb(0, 94, 201)",height:50,width:50}} onClick={buttonAdd} tabIndex={0} onKeyPress={onKeyPress} />
                </div>
            </div>
            {show === true ?
                <Popup onChange={handleChange} onClick={editPopup} onClickMod={modTodo} fun="mod" texto={texto}/>: null
            }
            {showDel === true ?
                <Popup onChange={handleChange} onClick={deletePopup} onClickDel={buttonDel} fun="del" texto={texto}/>: null
            }
        </React.Fragment>
    );
}

export default App;