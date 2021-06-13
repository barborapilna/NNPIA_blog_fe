import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Nav, Button, Navbar } from 'reactstrap'
// import Navbar from "react-bootstrap/Navbar";
// import {Link} from "react-router-dom";
//
import {useHistory} from 'react-router-dom';
//
export default function MyNavbar(props) {
//     var navItems = [];
//
    const history = useHistory();
//
//     navItems.push(<li className="nav-item">
//         <Link className="nav-link" to="/home">Home</Link>
//     </li>);
//
//     navItems.push(<li className="nav-item">
//         <Link className="nav-link" to="/post-list">Posts</Link>
//     </li>);
//
//     navItems.push(<li className="nav-item">
//         <Link className="nav-link" to="/about">About</Link>
//     </li>);
//
//     if (!props.isLogedIn) {
//         navItems.push(<li className="nav-item">
//             <Link className="nav-link" to="/register">Register</Link>
//         </li>);
//
//         navItems.push(<li className="nav-item">
//             <Link className="nav-link" to="/login">Login</Link>
//         </li>);
//     } else {
//         navItems.push(<li className="nav-item">
//             <a className="nav-link" onClick={props.logouMethod.bind(null, history)}>Odhlásit</a>
//         </li>);
//     }
//

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/post-list">Posts</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link onClick={props.logoutMethod.bind(null, history)}>Logout</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )

//     return (
//         <div className="card p-4">
//             <ul className="nav">
//                 {navItems}
//             </ul>
//         </div>
//     );
}
