import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MvpContent from '../../components/MvpContent'
import '../MVP/style.css'
const MvpType = () => {

    let mvpHeading = "What type of prototype or MVP are you building?"
    let mvpSubHeading = "Is it for mobile, the web, or both?"

    let card1 = "Mobile"
    let card2 = "Web"
    let card3 = "Web & Mobile"
  return (
    <Container>
        <Row>
            <Col>
                <MvpContent cardText1={card1} cardText2={card2} cardText3={card3} heading={mvpHeading} subHeading={mvpSubHeading}></MvpContent>
            </Col>
        </Row>
    </Container>
  )
}

export default MvpType