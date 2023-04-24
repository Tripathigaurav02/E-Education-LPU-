

import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {FaPhone,FaFacebook, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import './Footer.css'

const footerQuickLinks= [
    {
        display:'Home',
        url: '#Home'
    },
    {
        display:'About',
        url: '#About'
    },
    {
        display:'Courses',
        url: '#Courses'
    },
    {
        display:'Why Us',
        url: '#WhyUs'
    },
    {
        display:'Subscribe',
        url: '#Subscribe'
    },

]

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <Col lg='3'>
                    
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Reach out to Us</h1>
                            <p><i><FaPhone/></i> +91-1824-404404 </p>
                            <p><i><HiOutlineMail/></i>placement@lpu.co.in.</p>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/gaurav-kumar-tripathi-4302831b5/ " target='blank'><i><FaLinkedin/></i></a>
                                <a href="https://twitter.com/Gaurav_0216" target='blank'><i><FaTwitter/></i></a>
                                <a href="https://www.facebook.com/raunak.rishu.75" target='blank'><i><FaFacebook/></i></a>
                                <a href="https://github.com/Tripathigaurav02" target='blank'><i><FaGithub/></i></a>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Explore</h6>
                    <ListGroup>
                        {
                            footerQuickLinks.map((item,index)=>(
                                <ListGroupItem key={index} className='border-0 ps-0'>  <a href={item.url}>{item.display}</a></ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>

                <Col lg='3'>
                    <h6 className='fw-bold'>Get in Touch</h6>

                    <p> Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144001</p>

                </Col>
            </Row>
            <foot className="foot">
      Made with <span role="img" aria-label="heart">❤️</span> by Gaurav in India
    </foot>
        </Container>
        
    </footer>
    
  )
}

export default Footer