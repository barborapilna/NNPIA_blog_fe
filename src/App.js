import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Comment from "./components/Comment";
import React, {useState} from "react";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import ResponsePage from "./components/ResponsePage";
import Post from "./components/Post";
import PostList from "./components/PostList";
import NewPost from "./components/NewPost";
import { useAuth } from "./service/AuthContext";
import Register from "./components/Register";

function App() {
    const { user } = useAuth()

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
                    <Route path="/add/post" component={NewPost} />
                    <Route path="/register" component={Register} />
                    {isLoggedIn && <Route path="/response" component={ResponsePage} />}
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
