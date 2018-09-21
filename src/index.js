import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { shop_reducer } from "./reducers/shop_reducer";
import Shop from "./Containers/Shop_container";
import thunk from "redux-thunk";

const store = createStore(shop_reducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Shop /></Provider>, document.getElementById("root"));
registerServiceWorker();
