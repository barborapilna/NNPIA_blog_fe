import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register({logged}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div class="col-xs-1 col-sm-4 center">
            <h1>Register form</h1>
            <hr/>
            <Form>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="firstName" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="LastName" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </div>
    );
}
