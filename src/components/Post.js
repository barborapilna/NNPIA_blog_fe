import React, {useState} from 'react';
import axios from "axios";
import {WEB_ADDRESS} from "../components/Constants";
import Comment from "./Comment";

export default function Post(props) {
    const [post, setPost] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!isLoaded) {
        loadPost(props.match.params.postId, setPost, setIsLoaded);
    }

    return (
        <div>
            <br/>
            {!isLoaded && <h1>Loading...</h1>}
            {isLoaded && post && <div>
                <h1>{post.title}</h1>
                <small>{post.author} {post.date} #{post.id}</small>
                <div>{post.body}</div>
                <div dangerouslySetInnerHTML={createMarkup(post.body)}/>
                <hr/>
                <div>
                    {renderComments(post)}
                </div>
            </div>}
        </div>
    );

    // const createMarkup =(postBody) => {
    //     return {__html: postBody};
    // }
}

function createMarkup(postBody) {
    return {__html: postBody};
}

function renderComments(post) {
    const commentsList = [];

    post.comments.map((comment) => {
        const {id, body} = comment;
        commentsList.push(<Comment comment={comment} id={id}/>)
    })

    return commentsList;
}


function loadPost(postId, setPost, setIsLoaded) {
    const testPost = {
        id: postId,
        title: "Článek " + postId,
        author: "Franta Vomáčka",
        date: "9.6.2021 17:15",
        body: "<strong style='color: red;'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla quis diam. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nulla pulvinar eleifend sem. Nullam dapibus fermentum ipsum. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Duis risus. Praesent id justo in neque elementum ultrices. Aliquam erat volutpat. Pellentesque arcu. Nam sed tellus id magna elementum tincidunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Nullam at arcu a est sollicitudin euismod. Fusce aliquam vestibulum ipsum. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Aliquam in lorem sit amet leo accumsan lacinia. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</strong>",
        comments: [
            {
                id: 1,
                userName: "Já",
                body: "Tohle je bezva první komentář"
            },
            {
                id: 2,
                userName: "Třeba on",
                body: "Bezva druhý komentář"
            }
        ]
    };


        const request = ({
        url: 'http://localhost:8080/post/getAll',
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('tokens')
        })
    })

    fetch(request.url, request)
        .then(res => res.json()
            .then(json => {
                if (!res.ok) {
                    return Promise.reject(json);
                }
                return json;
            }))
        .then(result => {
                setPost(result);
                setIsLoaded(true);
            }
        )






    /*
    axios.post(WEB_ADDRESS + '/post', {
        postId: postId
    }).then((response) => {
        setPost(response.data);
        setIsLoaded(true);
    }).catch((e) => {
        history.push("/post-404/");
        console.error("AXIOS ERROR", e);
    }); */
}
