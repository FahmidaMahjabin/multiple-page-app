import React from 'react';
import { Navbar, Container, NavDropdown, Nav,  } from 'react-bootstrap';
import {Link} from 'react-router-dom';
const GetNav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="#home">Yammy Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className = "nav-link" to="/">Home</Link >
                        <Link className = "nav-link" to="/about">About</Link >
                        <Link className = "nav-link" to="/users">Users</Link >
                        <Link className = "nav-link" to="/user/:id">User</Link >
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default GetNav;