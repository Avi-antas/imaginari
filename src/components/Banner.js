import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Ban1 from "../images/ban1.jpg";
import Ban2 from "../images/ban2.jpg";
import Ban3 from "../images/ban3.jpg";
function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="my-slider text-center">
          <img src={Ban1} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="my-slider text-center">
          <img src={Ban2} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="my-slider text-center">
          <img src={Ban3} />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
