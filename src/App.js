import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Comment from "./components/Comment";
import React, {useState} from "react";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
    // eslint-disable-next-line no-undef
    // const [loggedIN, setLoggedIN] = useState(AuthService.getUserInfo() !== null);

    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <Router>
            <div className="App">

                <MyNavbar isLoggedIn={isLoggedIn} logoutMethod={userLogOut.bind(null, setLoggedIn)} />

                <Switch>
                    <Route path="/login">
                        <Login loginMethod={setLoggedIn} />
                    </Route>

                    <Route path="/about" component={About} />
                    <Route path="/comment" component={Comment} />
                    <Route path="/post-list" component={PostList} />
                    <Route path="/post/:postId" component={Post} />
                    {isLoggedIn && <Route path="/loggedIn" component={LoggedIn} />}
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

function userLogOut(setLoggedIn, history) {
    setLoggedIn(false);
    history.push("/");
}

export default App;
