import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5" data-aos="fade-up">
        About Us
      </h2>
      <Row className="align-items-center">
        <Col md={6} data-aos="fade-right">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            alt="Team working"
            fluid
            rounded
          />
        </Col>
        <Col md={6} data-aos="fade-left">
          <h4>Who We Are</h4>
          <p>
            Tanzil Shop is a modern e-commerce platform dedicated to offering high-quality electronics at competitive prices. We're passionate about blending functionality, style, and convenience to deliver the best shopping experience.
          </p>
          <h4>Our Vision</h4>
          <p>
            We aim to revolutionize online shopping with a clean interface, reliable delivery, and cutting-edge products that empower people in their daily lives.
          </p>
          <h4 className="mt-4">Why Choose Us?</h4>
          <ul className="list-unstyled mt-3">
            <li>✅ Handpicked premium electronics</li>
            <li>✅ Fast & reliable shipping</li>
            <li>✅ Trusted by thousands of customers</li>
            <li>✅ Exceptional customer support</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
