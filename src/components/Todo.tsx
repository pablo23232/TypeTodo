import {FC,InputHTMLAttributes} from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';


interface data{
    //task: string;
}

const Todo: React.FC<data>=(props) => {

    return <Card style={{marginBottom:10}}><Card.Body><input type={"checkbox"}></input> This is some text within a card body.</Card.Body></Card>
  }
  
  export default Todo;