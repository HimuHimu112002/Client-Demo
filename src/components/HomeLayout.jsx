import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import home2 from '../../public/image/home2.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomeLayout = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <Container fluid>
      <Row>

        {/* ================== Home page design left section start ============== */}

        <Col data-aos="fade-right" md={6}>
          <div className='Home--left--section'>

            <h1 className='Home--left--section__heading'>How much to build an MVP (minimum viable product)?</h1>

            <p className='Home--left--section__subHeadingOne'>Do you have an amazing idea for an app or software but don’t know where to start? Would you like to find out how much it would cost to build a prototype?</p>

            <p className='Home--left--section__subHeadingTwo'>We have created this handy cost calculator just for you. Find out how much your prototype will cost in 2 mins.</p>

            <Link to="/mvp-type">
              <Button className='Home--left--section__button rounded-pill mt-4'>Let's get started<BsArrowRight className='Home--left--section--button__icon mx-2'></BsArrowRight></Button>
            </Link>
              

            <div className='Home--left--section__socialISection mt-5'>
              <div className='Home--left--section__socialIconOne rounded py-1'><FaFacebook className='Home--left--section__socialIconPosition'></FaFacebook> Share</div>
              <div className='Home--left--section__socialIconOne rounded'><AiFillTwitterCircle className='Home--left--section__socialIconPosition'></AiFillTwitterCircle> Tweet</div>
            </div>

          </div>
        </Col>

        {/* ================== Home page design left section end ============== */}

        {/* ================== Home page design Right section start ============== */}

        <Col className='Svg' md={6}>

          <div className='video-container'>
            <video autoPlay muted width="100%" height="100%"  className='kk'>
              <source src='https://buildmymvp.com/img/feature-home2.mp4' type="video/mp4" />
            </video>
          </div>

        </Col>
        {/* ================== Home page design Right section end ============== */}
        <Outlet></Outlet>
      </Row>
    </Container>
  )
}
export default HomeLayout