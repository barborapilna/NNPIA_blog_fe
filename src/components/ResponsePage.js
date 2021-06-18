import React from 'react';

export default function ResponsePage(props) {
    return (
        <div>
            <br/>
            <h2>{props.title}</h2>
            <div>
                {props.message}
            </div>
        </div>
    );
}
