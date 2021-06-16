import React, {useState} from 'react';
import axios from "axios";
import {WEB_ADDRESS} from "../components/Constants";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PostList(props) {
    const [postList, setPostList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    console.warn("RENDER!");

    if (!isLoaded) {
        loadPost(setPostList, setIsLoaded);
    }

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

function renderAvailableLinks(postList) {
    const postLinks = [];

    postList.forEach((post) => {
        // postLinks.push(<li><Link className="nav-link" to={"/post/" + post.id}>{post.title}</Link></li>);
        postLinks.push(
            <div>
                <Card className="text-center">
                    <Card.Header>Author: {post.author}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Link className="nav-link" to={"/post/" + post.id}>
                        <Button variant="primary">Read</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <br/>
                <br/>
            </div>
        );
    });

    return postLinks;
}

function loadPost(setPostList, setIsLoaded) {
    const postList = [
        {
            id: 11,
            title: "Title of Post 11",
            author: "Bara",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla pulvinar eleifend sem. Nullam dapibus fermentum ipsum.",
        },
        {
            id: 22,
            title: "Title of Post 22",
            author: "Bara",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla pulvinar eleifend sem. Nullam dapibus fermentum ipsum.",
        },
        {
            id: 33,
            title: "Title of Post 33",
            author: "Bara",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla pulvinar eleifend sem. Nullam dapibus fermentum ipsum.",
        },
        {
            id: 44,
            title: "Title of Post 44",
            author: "Bara",
            body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla pulvinar eleifend sem. Nullam dapibus fermentum ipsum.",
        }
    ];

    setPostList(postList);
    setIsLoaded(true);

    /*
    axios.post(WEB_ADDRESS + '/getPostTitles').then((response) => {
        setPostList(response.data);
        setIsLoaded(true);
    }).catch((e) => {
        console.error("AXIOS ERROR", e);
    }); */
}
