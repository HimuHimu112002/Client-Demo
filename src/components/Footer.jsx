import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container>
        <Row>
            <Col md={6}>
            <div className='Home--left--section__aboutAndPrivacy my-5'>
              <div className='Home--left--section__AboutUs'> About Us</div>
              <div className='Home--left--section__PrivacyPolicy'>Privacy Policy</div>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer