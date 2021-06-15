import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewPost(props) {

    return (
        <div class="col-xs-1 col-sm-8 center">
            <h1>Add a new post</h1>
            <hr/>

            <Form>
                <Form.Group>
                    <Form.Label>Post title</Form.Label>
                    <Form.Control type="title" className="form-control" id="postTitle" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Write here</Form.Label>
                    <Form.Control as="textarea" rows={20} />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            {/*<form>*/}
            {/*    <div className="form-group">*/}
            {/*        <label>Post title</label>*/}
            {/*        <input type="title" className="form-control" id="postTitle"/>*/}
            {/*    </div>*/}

            {/*    <div className="form-group">*/}
            {/*        <label>Write here</label>*/}
            {/*        <textarea className="form-control" id="postBody" rows="20"></textarea>*/}
            {/*    </div>*/}

            {/*    <Button variant="primary" type="submit">Submit</Button>*/}
            {/*</form>*/}
        </div>

    )
}
