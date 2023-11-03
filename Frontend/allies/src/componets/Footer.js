import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import { FaFacebookF } from 'react-icons/fa';

import { AiOutlineTwitter } from 'react-icons/ai';

import { BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import './footer.css';

//No any changes

const Footer = () => {
    return (

        <Container fluid className="container-background">
            <Row>
                <Col>
                    <NavLink to="/" className="navbar-brand" activeClassName="active">
                        <img className='logo' src=".\img\logo.png" alt="logo" width="150px" height="100px" />
                    </NavLink>
                </Col>

                <Col>
                    <ul class="nav justify-content-center tabs">

                        <li className="link">
                            <NavLink to="/" exact >Home</NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="/about" >About</NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="/contact"  >Contact</NavLink>
                        </li>
                    </ul>

                </Col>

                <Col>
                    <Row className='text-md-end'>

                        <ul className='list-inline social'>
                            <li>
                                <a className='social-icon ' ><FaFacebookF /></a>
                                <a className='social-icon'><AiOutlineTwitter /></a>
                                <a className='social-icon'><BsGithub /></a>
                                <a className='social-icon'><AiFillInstagram /></a>



                            </li>


                        </ul>
                    </Row>
                </Col>





            </Row>

            <Row className="text-center">
                <hr className="custom-hr" />
                <p className='copyright'>Copyright © 2023 All rights reserved | This website is made with &#9829; by ALLIES</p>
            </Row>


        </Container >

    )
}

export default Footer