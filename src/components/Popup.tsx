import React,{FC} from "react";
import Button from "./Button"
import Input from "./Input";

interface PopupProps {
  onChange: (text: string) => void;
  onClick?: () => void;
  onClickMod?: () => void;
  onClickDel?: () => void;
  fun:string;
  texto:string;
}


const Popup: FC<PopupProps> = ({onChange,onClick,onClickMod,onClickDel,fun,texto}) => {
  return(
    <div className='popup'>
      <div className='popup_inner'>
        {fun==="mod"?
          <div style={{width:"100%", height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <h1 style={{marginBottom:20,textAlign:"center"}}>Modificar Tarea</h1>
           <Input onChange={onChange} texto={texto}/>
           <div style={{display:"flex" ,gap:20,justifyContent:"center"}}>
             <Button color="outline-primary" text="Modificar" onClick={onClickMod}/>
             <Button color="outline-danger" text="Cancelar" onClick={onClick}/>
           </div>
          </div>:null
        }
        {fun==="del"?
          <div style={{width:"100%", height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{marginBottom:20}}>¿Seguro que quieres eliminar esta tarea?</h1>
            <div style={{display:"flex" ,gap:20 , justifyContent:"center"}}>
              <Button color="outline-primary" text="Borrar" onClick={onClickDel}/>
              <Button color="outline-danger" text="Cancelar" onClick={onClick}/>
            </div>
          </div>:null
        }     
      </div>
    </div>
  );
}
  export default Popup;