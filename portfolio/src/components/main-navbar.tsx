import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { MainNavbarProps } from '../details/interfaces';
import './../index.css';

export const MainNavbar: React.FC<MainNavbarProps> = ({ navItems, onNavClick, details }) => {
    const displayName = `${details.name} ${details.lastName}`;
    return (
        <Navbar expand="lg" fixed="top" className="top-nav">
            <Container>
                <Navbar.Brand href="#" className="logo">
                    {displayName}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {navItems.map((item) => (
                            <Nav.Link
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={onNavClick(item.id)}
                                className={item.highlight ? 'text-danger' : ''}
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};