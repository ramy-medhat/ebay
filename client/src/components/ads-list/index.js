import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Ads = () => {
    const [ads, setAds] = useState([])

    useEffect(() => {
        var request = 'ad-list'
        fetch(request)
            .then(res => res.json())
            .then((data) => { setAds(data) })
            .catch(console.log)
    }, [])

    return (
        <Container>
            <Row style={{margin: '1.25rem 0 2rem'}}>
                <h2>Classifieds</h2>
            </Row>
            <Row>
                {ads.map((ad, index) => (
                    <Col xs={12} md={4} key={index} style={{marginTop:'2em'}}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={ad.imageUrl} />
                            <hr style={{ margin: '0 1em 0.8em' }} />
                            <Card.Body>
                                <Card.Title>{ad.title}</Card.Title>
                                <Card.Text>
                                    {ad.description}
                                </Card.Text>
                                <Button as={Link} to='/details' style={{width: '100%'}}>Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default Ads
