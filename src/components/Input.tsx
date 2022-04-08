import React,{FC,useState} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.css';

interface InputProps {
    texto: string;
    onChange: (text: string) => void;
    onKeyPress?:(e: React.KeyboardEvent)=> void;
}


const Input: FC<InputProps> = ({onChange,onKeyPress,texto}) => {

    const setValue = (value: string) => {
        onChange(value);
    }

    return (
        <div style={{width:500}}>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Nueva tarea</InputGroup.Text>
            <FormControl 
            onKeyDown={onKeyPress}
            onChange={(event: any) => setValue(event.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            maxLength={40}
            value={texto}
            />
            </InputGroup>
        </div>
    );
}

export default Input;