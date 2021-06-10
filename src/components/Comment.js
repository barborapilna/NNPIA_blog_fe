import React from "react";
import moment from 'moment';

const Comment = ({ comment }) => {
    const { userName, body, lastModifiedDate } = comment || {};

    return (
        <div>
            <div className="media mb-3">
                <div className={"comment-body"}>
                    <small className="float-right text-muted">{moment(lastModifiedDate).format("lll")}</small>
                    <h6 className="mt-0 mb-1 text-muted">{userName}</h6>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Comment;