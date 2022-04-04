import {FC,InputHTMLAttributes,useState} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.css';

interface InputProps {
    //task: string;
    onChange: (text: string) => void;    
}


const Input: FC<InputProps> = ({onChange}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const setValue = (value: string) => {
        setInputValue(value);
        onChange(value);
    }

    return (
        <div style={{width:500}}>
            <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Nueva tarea</InputGroup.Text>
            <FormControl 
            onChange={(event: any) => setValue(event.target.value)}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            />
            </InputGroup>
        </div>
    );
}

export default Input;