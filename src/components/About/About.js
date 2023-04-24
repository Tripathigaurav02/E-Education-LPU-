import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../Assets/about-us.png";
import CountUp from "react-countup";
import wStudents from "../Assets/wholeStudents.jpg"
import "./about.css";

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={wStudents} alt="" className="wstudents" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h1>About Us</h1>
              <p>
              LPU is recognized by the University Grants Commission (UGC) and offers undergraduate, graduate, and doctoral programs in various disciplines such as engineering, business, computer science, law, arts, and more. With over 30,000 students and 4000 faculty members, LPU is one of the largest universities in India, and it prides itself on its state-of-the-art facilities, research opportunities, and international collaborations.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={180} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Courses available</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={35000} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Students enrolled</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={650} duration={2} suffix="+" />
                    </span>

                    <p className="counter__title">Financial Ads approved</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={93} duration={2} suffix="%" />
                    </span>

                    <p className="counter__title">Students rated 5*</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
