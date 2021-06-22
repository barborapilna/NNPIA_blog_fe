import React from "react";
import jwt_decode from "jwt-decode";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Comment = ({props, comment}) => {

    const {id, userName, body} = comment || {};

    const renderCommentOptions = (userName) => {
        if (jwt_decode(localStorage.getItem('tokens')).sub === userName) {
            return (
                <div>
                    <Table responsive borderless>
                        <thead>
                        <tr>
                            <th><Button variant="primary" onClick={openLinkEdit}>Edit comment</Button></th>
                            <th><Button variant="primary" onClick={() => removeComment(id)}>Delete comment</Button>
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
            pathname: '/add/comment',
            state: {commentID: comment.id}
        })
    };

    const removeComment = async (id) => {
        const reqBody = {
            id: id
        };

        const request = ({
            url: 'http://localhost:8080/comment/' + id,
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('tokens')
            }),
            body: JSON.stringify(reqBody)
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
                props.history.push({
                    pathname: '/response',
                    state: {message: "Success!", title: result.message}
                });
            })
            .catch(result => {
                props.history.push({
                    pathname: '/response',
                    state: {title: "ERROR!", message: "Something went wrong."}
                });
            })
    };

    return (
        <div>
            <div>
                <div className={"comment-body"}>
                    <h6 className="mt-0 mb-1 text-muted">Comment author: {userName}</h6>
                    {body}
                    {renderCommentOptions(userName)}
                </div>
            </div>
        </div>
    );
};
export default Comment;