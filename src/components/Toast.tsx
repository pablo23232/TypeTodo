import {FC} from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast'



interface ToastProps {
    texto:string
}
  
  
const ToastComponent: FC<ToastProps> = ({texto}) => {
    return(
        <ToastContainer position="top-center">
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Bootstrap</strong>
                </Toast.Header>
                <Toast.Body>{texto}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
    export default ToastComponent;