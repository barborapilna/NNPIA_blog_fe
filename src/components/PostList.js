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
        <div className="card p-4">
            <h1>Dostupné články</h1>
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
        {id: 11, title: "Článek 10"},
        {id: 22, title: "Článek 20"},
        {id: 33, title: "Článek 30"},
        {id: 44, title: "Článek 40"}
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
