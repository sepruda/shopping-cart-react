import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { shop_reducer } from "./reducers/shop_reducer";
import Shop from "./Containers/Shop_container";

const store = createStore(shop_reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><Shop /></Provider>, document.getElementById("root"));
registerServiceWorker();
