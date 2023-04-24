import React from "react";
import { Container, Row, Col } from "reactstrap";
import img1 from '../Assets/testimonial01.png'
import students from "../Assets/students lpu.webp"
import './InfoSection.css'
const InfoSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="info_content">
              <h1>LPU Distance Education</h1>
              <h3>Learn Anywhere <br/> Learn Anytime <br/> At your own comfort</h3>
              <p>
              LPU (Lovely Professional University) was established in 2005 and has since grown to become one of the largest universities in India. The university offers a wide range of undergraduate, postgraduate, and doctoral programs across various fields.  <br/>Lovely Professional University (LPU) offers distance education programs for students who are unable to attend traditional on-campus classes. The university's Directorate of Distance Education (DDE) offers various undergraduate and postgraduate courses in fields such as management, information technology, commerce, arts, and education.<br/> 
              </p>

            </div>
          </Col>
          <Col lg="6" md="6">
            <img src={students} alt="img1" className="StudentsImg"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InfoSection;
