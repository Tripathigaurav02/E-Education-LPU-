

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Features.css';
import {RiDraftLine,RiDiscussLine} from 'react-icons/ri';
import {FaAddressBook} from 'react-icons/fa';

    

const Features = () => {
  return (
    <section>
        <Container>
            <Row>
                
                <Col lg='4' md="6">
                    <div className="single_feature">
                        <h2 className='mb-3'><i><RiDraftLine/></i></h2>
                        <h6>Fast Learning</h6>
                        <p>Online education has become increasingly popular in recent years, particularly in the wake of the COVID-19 pandemic. LPU is now offering online courses and programs that allow students to learn from the comfort of their own homes.</p>
                    </div>
                </Col>

                <Col lg='4' md='6'>
                    <div className="single_feature">
                        <h2 className='mb-3'><i><RiDiscussLine/></i></h2>
                        <h6>24X7 virtual support</h6>
                        <p>LPU is constantly adapting to the changing landscape of education. With the advent of online education, LPU IS offering 24x7 support for their students. This means that students can receive assistance with their coursework, access to resources, and help with technical issues at any time of the day or night.</p>
                    </div>
                </Col>

                <Col lg='4' md="6">
                    <div className="single_feature">
                        <h2 className='mb-3'><i><FaAddressBook/></i></h2>
                        <h6>Certifications</h6>
                        <p>With the rapid advancement of technology, LPU is now offering certification through online education. This is a great opportunity for individuals who are unable to attend traditional on-campus classes due to work, family, or other commitments.</p>
                    </div>
                </Col>

               
            </Row>
        </Container>
    </section>
   )
}

export default Features