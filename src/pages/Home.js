import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const featuredProducts = [
  {
    name: "Headphones",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    price: "$99",
  },
  {
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    price: "$999",
  },
  {
    name: "Speaker",
    image:
      "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?q=80&w=2070&auto=format&fit=crop",
    price: "$149",
  },
];

const testimonials = [
  {
    name: "Aisha Khan",
    text: "The products are top-notch and the delivery was super fast. Highly recommend Tanzil Store!",
    image: "https://i.pravatar.cc/60?img=47",
  },
  {
    name: "Rohan Mehta",
    text: "Awesome tech deals and super reliable service. This is my go-to store for gadgets!",
    image: "https://i.pravatar.cc/60?img=33",
  },
  {
    name: "Neha Patel",
    text: "Loved the user experience and product range. Everything arrived in perfect condition.",
    image: "https://i.pravatar.cc/60?img=45",
  },
];

const Home = () => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Tanzil Store</h1>
        <p style={{ fontSize: "1.5rem" }}>Best Online Electronic Store</p>
        <Button variant="light" size="lg" href="/shop">
          Shop Now
        </Button>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">
          Featured Products
        </h2>
        <Row>
          {featuredProducts.map((product, index) => (
            <Col
              md={4}
              className="mb-4"
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            >
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4" data-aos="fade-up">
          What Our Customers Say
        </h2>
        <Row className="justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col
              key={index}
              md={4}
              className="mb-4 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="p-3 shadow-sm h-100 border-0">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                  />
                  <Card.Text className="fst-italic text-muted mb-2">
                    “{testimonial.text}”
                  </Card.Text>
                  <Card.Title className="fw-bold text-dark">
                    — {testimonial.name}
                  </Card.Title>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="bg-dark text-white py-5 text-center" data-aos="fade-up">
        <Container>
          <h2 className="mb-3">Limited Time Offer</h2>
          <p>Get up to 40% off on selected products. Hurry up!</p>
          <Button variant="outline-light" href="/shop">
            Explore Deals
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
