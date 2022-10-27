import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade >
    <Carousel.Item>
      
    
        <div className='my-slider text-center'>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
       
    
    </Carousel.Item>
    <Carousel.Item>
     

    <div className='my-slider text-center'>
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
    </Carousel.Item>
    <Carousel.Item>
     

    <div className='my-slider text-center'>
        <h3>Third slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
    </Carousel.Item>
  </Carousel>
  )
}

export default Banner