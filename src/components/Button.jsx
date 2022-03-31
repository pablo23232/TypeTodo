import React from "react";
import ButtonBoost from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default function Button({color, event,text}) {

  return (
    <ButtonBoost variant={color} onClick={event}>{text}</ButtonBoost>
  );
}