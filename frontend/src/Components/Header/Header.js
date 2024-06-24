import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [userName, setUserName] = useState("Rahul");
    return (
        <Navbar bg="light" data-bs-theme="light" sticky="top">
            <Container>
                <NavLink to="book" className="navbar-brand">
                    <img src="/logo.svg" alt="logo" />
                </NavLink>
                <Nav>
                    <NavDropdown title={`Hello ${userName}`} id="basic-nav-dropdown">
                        <NavLink className="dropdown-item" to="login">Logout</NavLink>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}