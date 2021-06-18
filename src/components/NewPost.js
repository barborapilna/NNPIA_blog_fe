import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthService from "../service/AuthService";

export default function NewPost(props) {

    const [title, setTitle] = useState([]);
    const [body, setBody] = useState(false);

    // AuthService.getUserIdUser()

    const sendPost = () => {

        const reqBody = {
            title: title,
            body: body,
            userId: AuthService.getUserIdUser()
        }
        const request = ({
            url: 'http://localhost:8080/post',
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('tokens')
            }),
            body: JSON.stringify(reqBody)
        });

        fetch(request.url, request)
            .then(response =>
                response.json().then(json => {
                    if (!response.ok) {

                        return Promise.reject(json)
                    }
                    props.history.push({
                        pathname: '/response',
                        state: { message: "halo", title: "title" }
                    })

                    return json
                })
            )
    }

    return (
        <div class="col-xs-1 col-sm-8 center">
            <br/>
            <h1>Add a new post</h1>
            <hr/>

            <Form onSubmit={sendPost}>
                <Form.Group>
                    <Form.Label>Post title</Form.Label>
                    <Form.Control type="title" className="form-control" id="postTitle" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Write here</Form.Label>
                    <Form.Control as="textarea" rows={20} value={body} onChange={(e) => {setBody(e.target.value)}}/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}
