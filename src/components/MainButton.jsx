import React from 'react'
import { Button } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs';
const MainButton = () => {
  return (
    <div> 
        <Button className='Home--left--section__button rounded-pill mt-4'>Let's get started<BsArrowRight className='Home--left--section--button__icon mx-2'></BsArrowRight></Button>  
    </div>
  )
}

export default MainButton