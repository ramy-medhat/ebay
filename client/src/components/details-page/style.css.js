import styled from 'styled-components/macro'
import { Container, Card, Button} from "react-bootstrap"

export const DetailsWrapper = styled(Container)`
    padding: 1.5rem 15px;
`

export const BackButton = styled.a`
    color:black;
    margin-bottom: 2em;
    display: block;
    cursor: pointer;

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

export const ItemSendMessage = styled(Button)`
    & > svg{
        margin-right: 0.25em;
    }

    @media screen and (max-width: 768px){
        width:100%;
    }
`

export const SendMessage = styled(Button)`
    margin: 3.3em 0;
    width: 100%;
    
    & > svg{
        margin-right: 0.25em;
    }

    @media screen and (max-width: 768px){
        display:none;
    }
`