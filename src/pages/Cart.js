import React from "react";
import { useCart } from "../context/CartContext";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <Row key={item.id} className="align-items-center mb-4">
              <Col md={2}>
                <Image src={item.image} fluid rounded />
              </Col>
              <Col md={4}>
                <h5>{item.title}</h5>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </Col>
              <Col md={2}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}

          <hr />
          <h4 className="text-end">Total: <strong>${totalPrice.toFixed(2)}</strong></h4>
        </>
      )}
    </Container>
  );
};

export default Cart;
