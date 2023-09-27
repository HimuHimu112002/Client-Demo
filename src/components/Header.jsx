import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
    <Container>
        <Row>
            <Col>
            <div className='Logo'>BuildMyMVP <span>v1.1</span>
            <div className='Logo__border'></div>
            </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Header