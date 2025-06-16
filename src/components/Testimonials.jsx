import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const testimonials = [
  {
    name: 'Jennifer',
    text: 'Fast shipping and excellent customer service. The product was even better than expected.',
  },
  {
    name: 'Rahul',
    text: 'Great experience! I’ll definitely order again.',
  }
];

const Testimonials = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {testimonials.map((t, i) => (
          <Col key={i} md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Text>"{t.text}"</Card.Text>
                <Card.Subtitle className="text-muted mt-2">— {t.name}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
