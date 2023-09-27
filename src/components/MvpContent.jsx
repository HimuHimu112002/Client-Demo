/* eslint-disable react/prop-types */
import React, {useEffect } from 'react';
import { Col, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { PiArrowElbowRightThin } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArrowButton from './ArrowButton';

const MvpContent = (props) => {
    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])

  return (
    <Container fluid>
        <Row data-aos="fade-left" className='mvp--main--section'>
            
            <h1 className='mt-5 mvp--heading'>{props.heading}</h1>
            <p className='my-5 mvp--Subheading'>{props.subHeading}</p>
            
            <Col className='mvp--section shadow rounded' md={3}>
                <div className='mvp--section__content text-center'>

                <div className='mvp--card'>
                    <img src='type-iphone.svg'></img>
                </div>
                <h5 className='mt-5'>{props.cardText1}</h5>
                </div>
            </Col>

            <Col className='mvp--section shadow rounded' md={3}>
                <div className='mvp--section__content text-center'>

                <div className='mvp--card'>
                    <img src='desktop.svg'></img>
                </div>
                <h5 className='mt-5'>{props.cardText2}</h5>
                </div>
            </Col>

            <Col className='mvp--section shadow rounded' md={3}>
                <div className='mvp--section__content text-center'>

                <div className='mvp--card'>
                    <img src='desktop.svg'></img>
                </div>
                <h5 className='mt-5'>{props.cardText3}</h5>
                </div>

                <div className='tick'>
                    <PiArrowElbowRightThin></PiArrowElbowRightThin>
                </div>
            </Col>

            <div className='mvp--button mt-5'>
                <ArrowButton></ArrowButton>
            </div>
            
        </Row>
    </Container>
  )
}

export default MvpContent