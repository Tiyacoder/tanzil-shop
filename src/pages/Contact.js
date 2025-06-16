import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-5" data-aos="fade-up">
        Contact Us
      </h2>
      <Row>
        <Col md={6} data-aos="fade-right">
          <h4>Get in Touch</h4>
          <p>Have questions or need help? Fill out the form and our team will get back to you shortly.</p>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message..." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={6} className="mt-4 mt-md-0" data-aos="fade-left">
          <h4>Contact Information</h4>
          <p><strong>Address:</strong> 123 Tech Street, New Delhi, India</p>
          <p><strong>Email:</strong> tanzilshop@gmail.com </p>
          <p><strong>Phone:</strong> +1 234 567 8900</p>
          <p><strong>Hours:</strong> Mon–Sat , 9:00 AM – 6:00 PM</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
