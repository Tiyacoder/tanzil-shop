import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Image, Button, Toast } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // hide toast after 2s
  };

  if (!product) {
    return (
      <Container className="mt-5">
        <h2>Product Not Found</h2>
        <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
      </Container>
    );
  }

  return (
    <Container className="my-5" data-aos="fade-up">
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <h4 className="text-muted">₹{product.price}</h4>
          <p>
            {product.description ||
              "This is a high-quality product built for performance, durability, and style. Perfect for daily use or gifting!"}
          </p>
          <Button variant="dark" onClick={handleAddToCart}>Add to Cart</Button>
          <br />
          <Button variant="link" onClick={() => navigate("/shop")} className="mt-3">
            ← Back to Shop
          </Button>
        </Col>
      </Row>

      {/* ✅ Toast Notification */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
        bg="success"
        className="position-fixed bottom-0 end-0 m-4"
      >
        <Toast.Body className="text-white">✅ Added to cart</Toast.Body>
      </Toast>
    </Container>
  );
};

export default ProductDetails;
