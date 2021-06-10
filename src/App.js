import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Comment from "./components/Comment";
import React, {useState} from "react";
import NavbarComponent from "./components/NavbarComponent";

function App() {
    // eslint-disable-next-line no-undef
    // const [loggedIN, setLoggedIN] = useState(AuthService.getUserInfo() !== null);

    return (
        <Router>
            <div className="App">
                {/*<NavbarComponent {...{loggedIN}}/>*/}

                <Switch>
                    <Route path="/about" component={About}/>

                    <Route path="/comment" component={Comment}/>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
