import React from 'react';
import axios from "axios";
import {WEB_ADDRESS} from "../components/Constants";

import {useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login(props) {
    const history = useHistory();

    console.error("LoginProps: ", props);

    return (
        <div>
            <Form>
                <Form.Group controlId="formLogin">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="userName" placeholder="Enter your user name"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password"/>
                </Form.Group>

                <Button variant="primary" type="login" onClick={userLogIn.bind(null, props.loginMethod, history)}>
                    Login
                </Button>
            </Form>
        </div>

        // <div className="card p-4">
        //     <div>Login:
        //         <input type="text" name="login" id="loginInput" />
        //     </div>
        //
        //     <div>Password:
        //         <input type="password" name="password" id="passwordInput" />
        //     </div>
        //
        //     <button onClick={userLogIn.bind(null, props.loginMethod, history)}>Přihlásit</button>
        // </div>
    )
}

function userLogIn(loginMethod, history) {
    var login = document.getElementById("loginInput").value;
    var password = document.getElementById("passwordInput").value;

    if (login === "test" && password === "test") {
        loginMethod(true);
        history.push('/loggedIn');
    }

    /*
    axios.post(WEB_ADDRESS + '/login', {
        credentials: {
            login: login,
            password: password
        }
    }).then((response) => {
        loginMethod(true);
    }).catch((e) => {
        console.error("AXIOS ERROR", e);
    }); */
}
