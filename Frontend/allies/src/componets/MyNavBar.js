import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './mynavbar.css';

const MyNavBar = () => {
    return (
        <div>
            <Navbar className="navbar sticky-top" expand="lg">
                <Container>
                    <div className="d-flex justify-content-between w-100">
                        <div>
                            <NavLink to="/" className="navbar-brand" activeClassName="active">
                                <img className='logo' src=".\img\logo.png" alt="logo" width="100" height="75" />
                            </NavLink>
                        </div>
                        <div>
                            <ul className="nav">
                                <li className="nav-item">
                                    <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default MyNavBar;
