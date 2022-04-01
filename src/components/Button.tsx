import React from "react";
import ButtonBoost from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


interface data{
  color:string;
  text:string;
  onClick: () => void;
}

const Button: React.FC<data>=(props) => {

  return <ButtonBoost variant={props.color} onClick={props.onClick}>{props.text}</ButtonBoost>
}

export default Button;