import React from 'react'
import {
  Link
} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MainSliber = () => {
  const settings = {
    dots: true, // 캐러셀의 점 출력 여부 
    infinite: true, // 무한 반복 여부  
    speed: 500, // 넘기는 속도 
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2300,
    pauseOnHover: true,
    className: '',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
   <main className='main-sliber'>
     <Slider {...settings}>
      <div>
        <img src={`assets/react-logo.png`}></img>
      </div>
      <div>
        <img src={`assets/axios.png`}></img>
      </div>
      <div>
        <img src={`assets/react-slick.gif`}></img>
      </div>
      <div>
        <img src={`assets/react-router-dom.png`}></img>
      </div>
    </Slider>
    
   </main>
  )
}

export default MainSliber;