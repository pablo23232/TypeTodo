import React from "react";
import Button from "./components/Button"
import Input from "./components/Input"
import Todo from "./components/Todo";

interface Props{
    inputText?:string;
}
class App extends React.Component<Props>{
    

    buttonAdd=():void =>  {
        console.log({})
    };
    
    buttonDel=():void => {
        console.log("boton de Eliminar")
    };

    

    render(){
    return (
        <React.Fragment>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Todo/>
                <Input onChange={this.buttonAdd}/>
                <div style={{display:"flex",flexDirection:"row",gap:10}}>
                    <Button color="outline-primary" text="Añadir" onClick={this.buttonAdd} />
                <Button color="outline-danger" text="Eliminar" onClick={this.buttonDel}/>
                </div>
            </div>
        </React.Fragment>
        
    );
    }
}

export default App;