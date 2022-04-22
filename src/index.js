import React from "react";
import * as ReactDOM from 'react-dom/client';
import RouterDom from "./RouterDom";
import "./index.css";
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.createRoot( document.getElementById("root")).render(<Provider store={store}><RouterDom/></Provider>);