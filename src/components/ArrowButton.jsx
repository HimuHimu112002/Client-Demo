import React, { useState } from 'react'
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import {Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ArrowButton = () => {

  const [count, setCount] = useState(0);
  const now = count;

  let handleProgrss = () =>{
    setCount(count+10)
  }
  return (
    <div>
        <div className='mvp--arrowIcon--section'>
        
        <Link to="/">
          <Button className='Home--left--section__button rounded-pill mt-4'><BiArrowBack className='Home--left--section--button__icon mx-2'></BiArrowBack>Previous</Button>
        </Link>

        <Link to="/">
          <div className='mvp--arrowIcon__left m-3 shadow py-2 px-3 rounded mt-5'>
            <BsArrowLeft className='arrow--iconOne'></BsArrowLeft>
          </div>
        </Link>
                   
        <div onClick={handleProgrss} className='mvp--arrowIcon__right shadow py-2 px-3 rounded mt-4'>
          <BsArrowRight></BsArrowRight>
        </div>

        </div>

        <div className='progressBar'>
          <ProgressBar now={now} label={`${now}%`} />
        </div>

    </div>
  )
}
export default ArrowButton