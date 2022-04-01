import {FC,InputHTMLAttributes} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    //task: string;
}


const Input: FC<InputProps> = (/*{task}*/) => {

    return (
        <div style={{width:500}}>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Nueva tarea</InputGroup.Text>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
            </InputGroup>
        </div>
    );
  }

export default Input;