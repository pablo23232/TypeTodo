import React from "react";
import Button from "./components/Button"

function App(){
    const buttonAdd=() => {
        console.log("boton de añadir")
    }
    const buttonDel=() => {
        console.log("boton de Eliminar")
    }
    return (
        <React.Fragment>
            <Button color="outline-primary" text="Añadir" event={buttonAdd} />
            <Button color="outline-danger" text="Eliminar" event={buttonDel}/>
        </React.Fragment>
        
        );
}

export default App;