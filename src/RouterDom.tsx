import { Route, Routes,BrowserRouter} from "react-router-dom";
import About from "./sites/About";
import App from "./sites/App";
import Navbar from "./components/Nav";
import Graphycs from "./sites/Graphycs";

const RouterDom : React.FC = () => {


    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/graphycs" element={<Graphycs/>} />
            </Routes>        
        </BrowserRouter>
    );
}

export default RouterDom;

