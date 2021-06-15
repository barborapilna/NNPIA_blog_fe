import React, {useState} from 'react';
import axios from "axios";
import {WEB_ADDRESS} from "../components/Constants";
import {Link} from "react-router-dom";

export default function PostList(props) {
    const [postList, setPostList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    console.warn("RENDER!");

    if (!isLoaded) {
        loadPost(setPostList, setIsLoaded);
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {renderAvailableLinks(postList)}
            </ul>
        </div>
    );
}

function renderAvailableLinks(postList) {
    const postLinks = [];

    postList.forEach((post) => {
        postLinks.push(<li><Link className="nav-link" to={"/post/" + post.id}>{post.title}</Link></li>);
    });

    return postLinks;
}

function loadPost(setPostList, setIsLoaded) {
    const postList = [
        {id: 11, title: "Post 11"},
        {id: 22, title: "Post 22"},
        {id: 33, title: "Post 33"},
        {id: 44, title: "Post 44"}
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
