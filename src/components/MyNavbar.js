import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Nav, Button, Navbar } from 'reactstrap'
// import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
//
import {useHistory} from 'react-router-dom';
//
export default function MyNavbar(props) {
    var navItems = [];

    const history = useHistory();

    navItems.push(<li className="nav-item">
        <Nav.Link href="/home">Home</Nav.Link>
    </li>);

    navItems.push(<li className="nav-item">
        <Nav.Link href="/about">About</Nav.Link>
    </li>);

    navItems.push(<li className="nav-item">
        <Nav.Link href="/post-list">Posts</Nav.Link>
    </li>);

    if (!props.isLoggedIn) {
        navItems.push(<li className="nav-item">
            <Nav.Link href="/login">Login</Nav.Link>
        </li>);

        navItems.push(<li className="nav-item">
            <Nav.Link href="/register">Register</Nav.Link>
        </li>);
    } else {
        navItems.push(<li className="nav-item">
            <Nav.Link href="/add/post">Create post</Nav.Link>
        </li>);

        navItems.push(<li className="nav-item">
            <Nav.Link onClick={props.logoutMethod.bind(null, history)}>Logout</Nav.Link>
        </li>);
    }


    // return (
    //     <div>
    //         <Navbar bg="dark" variant="dark">
    //             <Navbar.Brand href="/home">My Blog</Navbar.Brand>
    //             <Nav className="mr-auto">
    //                 <Nav.Link href="/home">Home</Nav.Link>
    //                 <Nav.Link href="/about">About</Nav.Link>
    //                 <Nav.Link href="/post-list">Posts</Nav.Link>
    //                 <Nav.Link href="/login">Login</Nav.Link>
    //                 <Nav.Link href="/register">Register</Nav.Link>
    //                 <Nav.Link onClick={props.logoutMethod.bind(null, history)}>Logout</Nav.Link>
    //             </Nav>
    //         </Navbar>
    //     </div>
    // )

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">My Blog</Navbar.Brand>
                <Nav className="mr-auto">
                    <ul className="nav">
                        {navItems}
                    </ul>
                </Nav>
            </Navbar>
        </div>

        // <div className="card p-4">
        //     <ul className="nav">
        //         {navItems}
        //     </ul>
        // </div>
    );
}
