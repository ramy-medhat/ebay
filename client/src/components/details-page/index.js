import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Modal, Row, Col, Card, Button, Form } from "react-bootstrap";
import { ArrowLeft, Envelope } from 'react-bootstrap-icons';
import { BackButton, 
         DetailsWrapper, 
         ItemCard, 
         ItemCardBody, 
         ItemImage, 
         ItemSendMessage, 
         SendMessage} from './style.css';

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
      <DetailsWrapper data-testid='container'>
         <Row className="show-grid">
            <Col xs={12} md={9}>
               <BackButton as={Link} to='/ads'>
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
                     <ItemSendMessage variant="primary" onClick={handleShow}>
                        <Envelope/>  Write message
                     </ItemSendMessage>
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
            <Col xs={12} md={3}>
               <SendMessage variant="primary" onClick={handleShow}>
                  <Envelope/>  Write message
               </SendMessage>
            </Col>
         </Row>
      </DetailsWrapper>
   )
}


export default Details;