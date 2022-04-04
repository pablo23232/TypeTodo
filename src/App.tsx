import React, {SetStateAction, useState} from "react";
import Button from "./components/Button"
import Input from "./components/Input"
import TodoList, { Todo } from "./components/TodoList";


let id:number=0;

const App : React.FC = () => {

    let texto= ""; 
    
    const [todos, setTodos] = useState<Todo[]>([]);



    function handleChange(inputvalue:string){
        console.log("option in child component changed to " + inputvalue);
        texto=inputvalue;
    };

    function toggleTodo(id:number):void{
        const newTodos = [...todos];
        const todo:Todo= newTodos.find((todo)=> todo.id ===id)!;
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    function buttonAdd():void  {
        id=id+1; 
        const newElement ={id:id,task:texto,completed:false};
        setTodos([...todos, newElement]);
        
    };
    
    function buttonDel():void{
        const newTodos = todos.filter((todo) => !todo.completed);
        console.log(newTodos);
        setTodos(newTodos);
    };

    return (
        <React.Fragment>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
                <Input onChange={handleChange}/>
                <div style={{display:"flex",flexDirection:"row",gap:10}}>
                    <Button color="outline-primary" text="Añadir" onClick={buttonAdd} />
                <Button color="outline-danger" text="Eliminar" onClick={buttonDel}/>
                </div>
            </div>
        </React.Fragment>
        
    );
    
}

export default App;