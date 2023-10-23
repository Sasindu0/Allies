import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import { FaFacebookF } from 'react-icons/fa';

import { AiOutlineTwitter } from 'react-icons/ai';

import { BsGithub } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';



const Footer = () => {
    return (

        <Container fluid>
            <Row>
                <Col>
                    <NavLink to="/" className="navbar-brand" activeClassName="active">
                        <img className='logo' src=".\img\logo.png" alt="logo" width="75" height="50" />
                    </NavLink>
                </Col>

                <Col>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </Col>

                <Col>
                    <Row >
                        <a><FaFacebookF /></a>
                        <a><AiOutlineTwitter /></a>
                        <a><BsGithub /></a>
                        <a><AiFillInstagram /></a>
                    </Row>
                </Col>


                <div>
                    <p>Copyright ©2021 All rights reserved | This website is made with &#9829; by allies_security</p>
                </div>

            </Row>

        </Container>

    )
}

export default Footer