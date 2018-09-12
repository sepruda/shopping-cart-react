import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { shop_reducer } from "./reducers/shop_reducer";

const store = createStore(shop_reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
registerServiceWorker();
