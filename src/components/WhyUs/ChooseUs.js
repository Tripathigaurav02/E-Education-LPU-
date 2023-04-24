import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import chooseImg from '../Assets/distanceEducation.jpg';
import './ChooseUs.css';

const ChooseUs = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="choose_content">
                        <h2>Why you should <br/> choose Us?</h2>
                        <p>Wide range of programs: LPU offers a variety of distance education programs across different fields, such as management, computer applications, arts, and science. This means that students can choose a program that best suits their career goals and interests.<br/><br/> Accreditation: LPU is recognized by the University Grants Commission (UGC) and Distance Education Bureau (DEB), which ensures the quality of its programs. Additionally, some of its programs are also accredited by professional bodies, such as AICTE, NCTE, and PCI.

</p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="choose_img">
                        <img src={chooseImg} alt="" className='w-100' />

                    
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ChooseUs;