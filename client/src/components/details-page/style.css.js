import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
    padding: 1.5rem 0;
`

export const BackButton = styled(Link)`
    color:black;
    margin-bottom: 2em;
    display: block;

    &:hover{
        color: #007bff;
        text-decoration: none;
    }
`

export const ItemCard = styled(Card)`
    width: 100%;
    padding: 1.25rem;
`

export const ItemCardBody = styled.div`
    padding: 0 0  1.25rem;
`

export const ItemImage = styled.img`
    max-width: 100%;
    height: auto;
    margin: 1em auto 3em;
`