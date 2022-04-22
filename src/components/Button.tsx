import React from "react";
import ButtonBoost from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';


interface ButtonProps{
  color:string;
  text:string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({color,text,onClick}) => <ButtonBoost data-testid={text} variant={color} onClick={onClick}>{text}</ButtonBoost>

export default Button;