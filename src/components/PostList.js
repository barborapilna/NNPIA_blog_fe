import React, {useState, useEffect} from 'react';
import axios from "axios";
import {WEB_ADDRESS} from "../components/Constants";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PostList(props) {
    const [postList, setPostList] = useState([]);

    // console.warn("RENDER!");

    useEffect(async () => {
        const request = ({
            url: 'http://localhost:8080/post/getAll',
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
                setPostList(result);
            })
    }, [])

    const renderAvailableLinks = (postList) => {
        const postLinks = [];

        postList.map((post) => {
            const {id, author, title, body}  = post;
            postLinks.push(
                <div>
                    <Card id={id} className="text-center">
                        <Card.Header>Author: {author}</Card.Header>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{body.substring(0,500) + "..."}</Card.Text>
                            {/*<Link className="nav-link" to={"/post/" + id}>*/}
                                <Button variant="primary" onClick={() => openLink(id)}>Read</Button>
                                {/*<Button variant="primary">Read</Button>*/}
                            {/*</Link>*/}
                        </Card.Body>
                    </Card>
                    <br/>
                    <br/>
                </div>
            );
        });

        return postLinks;
    };

    const openLink = (postId) => {
        props.history.push({
            pathname: '/post',
            state: {postID: postId}
        })
    };

    return (
        <div>
            <br/>
            <h1>Posts:</h1>
            <br/>
            <ul>
                {renderAvailableLinks(postList)}
            </ul>
        </div>
    );
}
