import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Headphones",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop",
    price: "$99"
  },
  {
    id: 2,
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
    price: "$999"
  },
  {
    id: 3,
    name: "Speaker",
    image:
      "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?q=80&w=2070&auto=format&fit=crop",
    price: "$149"
  },
  {
    id: 4,
    name: "Smartwatch",
    image:
      "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$199"
  },
  {
    id: 5,
    name: "Camera",
    image:
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$649"
  },
  {
    id: 6,
    name: "Gaming Mouse",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$49"
  }
];

const Shop = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" data-aos="fade-up">Our Products</h2>
      <Row>
        {products.map((product, index) => (
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
                <Button
                  as={Link}
                  to={`/product/${product.id}`}
                  variant="primary"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
