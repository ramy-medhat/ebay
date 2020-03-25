import React, { useState, useEffect } from 'react';
import { Modal, Row, Col, Card, Button, Form } from "react-bootstrap";
import { ArrowLeft, Envelope } from 'react-bootstrap-icons';
import { BackButton, DetailsWrapper, ItemCard, ItemCardBody, ItemImage } from './style.css';


const Details = () => {
   const [details, setDetails] = useState([]);
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   useEffect(() => {
      var request = 'ad-single'
      fetch(request)
         .then(res => res.json())
         .then((data) => { setDetails(data) })
         .catch(console.log)
   }, [])

   return (
      <DetailsWrapper>
         <Row className="show-grid">
            <Col xs={12} md={6}>
               <BackButton to='/ads'>
                  <ArrowLeft /> Back to result page
               </BackButton>
               <ItemCard>
                  <Card.Title>{details.title}</Card.Title>
                  <ItemImage variant="top" src={details.imageUrl} />
                  <h5>Description</h5>
                  <hr style={{ margin: '0 0 0.8em' }} />
                  <ItemCardBody>
                     <Card.Text>
                        {details.description}
                     </Card.Text>
                     <hr style={{ margin: '0 0 0.8em' }} />
                     <Button variant="primary" onClick={handleShow}>
                     <Envelope/>  Write message
                     </Button>
                     <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                           <Modal.Title>Contact us</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                           <Form.Group controlId="formGroupEmail">
                              <Form.Control type="email" placeholder="Enter your email" />
                           </Form.Group>
                           <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Control as="textarea" rows="3" placeholder="Enter your message" />
                           </Form.Group>
                           </Form>
                        </Modal.Body>
                        <Modal.Footer>
                           <Button variant="secondary" onClick={handleClose}>
                              Cancel
                           </Button>
                           <Button variant="success" onClick={handleClose}>
                              Send
                           </Button>
                        </Modal.Footer>
                     </Modal>
                  </ItemCardBody>
               </ItemCard>
            </Col>
         </Row>
      </DetailsWrapper>
   )
}


export default Details;