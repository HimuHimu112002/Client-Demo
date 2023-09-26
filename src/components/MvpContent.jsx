/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs';
import { PiArrowElbowRightThin } from 'react-icons/pi';

import AOS from 'aos';
import 'aos/dist/aos.css';

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

                <Link to="/">
                    <Button className='Home--left--section__button rounded-pill mt-4'><BiArrowBack className='Home--left--section--button__icon mx-2'></BiArrowBack>Previous</Button>
                </Link>

                <div className='mvp--arrowIcon--section'>
                    <Link to="/">
                        <div className='mvp--arrowIcon__left m-3 shadow py-2 px-3 rounded'>
                            <BsArrowLeft className='arrow--iconOne'></BsArrowLeft>
                        </div>
                    </Link>

                    <div className='mvp--arrowIcon__right shadow py-2 px-3 rounded'>
                        <BsArrowRight></BsArrowRight>
                    </div>

                </div>
            </div>
        </Row>
    </Container>
  )
}

export default MvpContent