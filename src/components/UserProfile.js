import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import jwt_decode from "jwt-decode";
import Table from "react-bootstrap/Table";
// import {useHistory} from 'react-router-dom';
import { useAuth } from "../service/AuthContext";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

export default function UserProfile(props) {
    const [user, setUser] = useState([]);

    // const history = useHistory();
    const { removeTokens } = useAuth()

    useEffect(async () => {
        const request = ({
            url: 'http://localhost:8080/user/' + jwt_decode(localStorage.getItem('tokens')).sub,
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('tokens')
            })
        });

        await fetch(request.url, request)
            .then(response =>
                response.json().then(json => {
                    if (!response.ok) {
                        return Promise.reject(json)
                    }

                    return json
                })
            )
            .then(result => {
                setUser(result);
            })
    }, [])

    const renderUserOptions = (userName) => {
        if (jwt_decode(localStorage.getItem('tokens')).sub === userName) {
            return (
                <div>
                    <Table responsive borderless>
                        <thead>
                        <tr>
                            <th></th>
                            <th><Button variant="primary" onClick={openLinkEdit}>Edit profile</Button></th>
                            <th><Button variant="primary" onClick={() => removeUser(user.id)}>Delete account</Button>
                            </th>
                        </tr>
                        </thead>
                    </Table>
                </div>
            )
        }
    };

    const openLinkEdit = () => {
        props.history.push({
            pathname: '/edit/user',
            state: {userID: user.id}
        })
    };

    const removeUser = async (id) => {
        // const reqBody = {
        //     id: id
        // };

        const request = ({
            url: 'http://localhost:8080/user/' + id,
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('tokens')
            }),
            // body: JSON.stringify(reqBody)
        });

        await fetch(request.url, request)
            .then(response =>
                response.json().then(json => {
                    if (!response.ok) {
                        return Promise.reject(json)
                    }
                    return json
                })
            )
            .then(result => {
                // props.logoutMethod.bind(null, history)
                removeTokens();
                props.history.push({
                    pathname: '/',
                    // state: {message: "Success!", title: result.message}
                });
            })
            .catch(result => {
                props.history.push({
                    pathname: '/response',
                    state: {title: "ERROR!", message: "Something went wrong."}
                });
            })
    };

    const {username, firstName, lastName} = user;

    return (
        <div>
            <br/>
            <h1>Your profile</h1>
            <br/>
            <br/>
            <h5 class="absolute">Username:&emsp;&emsp;{username}</h5>
            <br/>
            <br/>
            <h5 class="absolute">Fist name:&nbsp;&emsp;&emsp;{firstName}</h5>
            <br/>
            <br/>
            <h5 class="absolute">Last name:&emsp;&emsp;{lastName}</h5>
            <br/>
            <br/>
            {renderUserOptions(jwt_decode(localStorage.getItem('tokens')).sub)}
        </div>
    );
}
