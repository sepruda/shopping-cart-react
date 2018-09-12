import React from "react";
import Header from "./Header";
import Shop from "./Shop";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Shop />
            </div>
        );
    }
}

export default App;
