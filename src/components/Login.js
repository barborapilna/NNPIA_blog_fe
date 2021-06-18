import {Redirect} from "react-router-dom";
import {useAuth} from "../service/AuthContext";
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function Login(props) {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState({});
    const {setTokens} = useAuth();
    const history = useHistory();

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        data[name] = value
        setData({...data})
    }

    function postLogin(e) {
        e.preventDefault()

        fetch(`http://localhost:8080/authenticate`,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(`Unable to get data: ${response.statusText}`)
            })
            .then(json => {
                setTokens(json.token);
                setLoggedIn(true);
                return <Redirect to="/"/>;
            })
            .catch((err) => {
                setIsError(err.message)
            })

    }

    if (isLoggedIn) {
        return <Redirect to="/"/>;
    }

    return (
        <div>
            <br/>
            <h1>Log in form</h1>
            <hr/>
            <form onSubmit={postLogin}>
                <div>
                    <label>User name</label>
                    <br/>
                    <input type={"text"} name={"username"} onChange={handleInputChange}/>
                </div>
                <br/>
                <div>
                    <label>Password</label>
                    <br/>
                    <input type={"password"} name={"password"} onChange={handleInputChange}/>
                </div>
                <br/>
                <button>Login</button>
                {isError}
            </form>
        </div>
    )

}


// import React from 'react';
// import axios from "axios";
// import {WEB_ADDRESS} from "../components/Constants";
//
// import {useHistory} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
//
// export default function Login(props) {
//     const history = useHistory();
//
//     console.error("LoginProps: ", props);
//
//     return (
//         <div class="col-xs-1 col-sm-4 center">
//             <h1>Log in form</h1>
//             <hr/>
//             <Form>
//                 <Form.Group controlId="formLogin">
//                     <Form.Label>User name</Form.Label>
//                     <Form.Control type="userName" placeholder="Enter your user name" id="loginInput"/>
//                 </Form.Group>
//
//                 <Form.Group controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Enter your password" id="passwordInput"/>
//                 </Form.Group>
//
//                 <Button variant="primary" type="login" onClick={userLogIn.bind(null, props.loginMethod, history)}>
//                     Login
//                 </Button>
//             </Form>
//         </div>
//     )
// }
//
// function userLogIn(loginMethod, history) {
//     // var login = document.getElementById("loginInput").value;
//     // var password = document.getElementById("passwordInput").value;
//
//     // if (login === "test" && password === "test") {
//         loginMethod(true);
//         history.push('/');
//     // }
//
//     /*
//     axios.post(WEB_ADDRESS + '/login', {
//         credentials: {
//             login: login,
//             password: password
//         }
//     }).then((response) => {
//         loginMethod(true);
//     }).catch((e) => {
//         console.error("AXIOS ERROR", e);
//     }); */
// }
