import React, {useEffect, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function CommentForm(props) {

    const [body, setBody] = useState([]);
    const [postId, setPostId] = useState(null);
    const [commentId, setCommentId] = useState(null);

    useEffect(async () => {
        setPostId(props.location.state.postID);
        setCommentId(props.location.state.commentID);


        if (props.location.state.commentID !== -1) {
            const request = ({
                url: 'http://localhost:8080/comment/' + props.location.state.commentID,
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
                    setBody(result.body);
                })
        }
    }, [])

    const addComment = () => {
        const reqBody = {
            body: body,
            postId: postId
        };

        const request = ({
            url: 'http://localhost:8080/comment',
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

                    return json
                })
            )
            .then(result => {
                props.history.push({
                    pathname: '/response',
                    state: {message: "Success!", title: result.message}
                });
            })
    };

    const editComment = () => {
        const reqBody = {
            id: commentId,
            body: body,
        };

        const request = ({
            url: 'http://localhost:8080/comment/' + commentId,
            method: 'PUT',
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

                    return json
                })
            )
            .then(result => {
                props.history.push({
                    pathname: '/response',
                    state: {message: "Success!", title: result.message}
                });
            })
    };


    const sendComment = (e) => {
        e.preventDefault();

        if (commentId === -1) {
            addComment();
        } else {
            editComment();
        }
    };

    return (
        <div class="col-xs-1 col-sm-8 center">
            <br/>
            <h1>Add / Edit a comment</h1>
            <hr/>

            <Form onSubmit={sendComment}>

                <Form.Group>
                    <Form.Label>Write here</Form.Label>
                    <Form.Control as="textarea" rows={10} value={body} onChange={(e) => {
                        setBody(e.target.value)
                    }}/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}