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
import PostForm from "./components/PostForm";
import { useAuth } from "./service/AuthContext";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import UserForm from "./components/UserForm";

function App() {
    const { removeTokens } = useAuth()
    const [isLoggedIn, setLoggedIn] = useState(false);

    const userLogOut = (setLoggedIn, history) => {
        setLoggedIn(false);
        removeTokens();
        history.push("/");
    };

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
                    <Route path="/add/post" component={PostForm} />
                    <Route path="/register" component={Register} />
                    <Route path="/response" component={ResponsePage} />}
                    <Route path="/user-profile" component={UserProfile} />}
                    <Route path="/edit/user" component={UserForm} />}
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );

}

export default App;
