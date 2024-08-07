// src/SwiperComponent.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import styled from 'styled-components';
import image1 from '../assets/M3M1.webp';
import image2 from '../assets/M3M2.webp';
import image3 from '../assets/M3M3.webp';
import image4 from '../assets/M3M4.webp';
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
SwiperCore.use([Navigation, EffectCoverflow]);

const SwiperContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: black;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2rem;
    font-family: monospace;
    letter-spacing: 0.08rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding : 0px;
    position: relative;
    overflow: hidden;
    margin-right: 100px;

    img {
      width: 100%;
      height: 50%;
      object-fit: cover;
      position: absolute;
      top: 0;
    }

    .text {
       margin-top: 90%;
        text-align: left;
        font-size: 1rem;
        padding: 5px;

    }

    .card{
      padding: 0px;
      margin-right: 150px;
    }
      .location{
      display: inline-block;
      }

    .text p {
      margin: 0;
    padding: 5px;
    font-weight: 600;
    flex-wrap: nowrap;
    display: flex;
    align-items: center;

      }
    span{
      font-size: 1rem;
      padding-right: 5px;
      text-align: center;
    }

    .btn {
      background-color: black;
      border: none;
      color: white;
      padding: 0.3rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 5px;
    }

    .btn:hover {
      background-color: white;
      color: black;
      border : 1px solid black;
      padding: 0.3rem;
    }



  }
       .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 1.5rem !important;
    color: white;
    }

`;

const SwiperComponent = () => {
  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <SwiperContainer>
        <Swiper
          loop={false}
          slidesPerView={3}
          spaceBetween={150}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide className='card'>
            <img src={`${image1}`} alt="Image 1" />
            <div className="text">
              <p> Whiteland Urban Resort</p>
              <p> <span><FaLocationDot /></span> Sector 89, Gurugram</p>
              <p> <span><FaRupeeSign /></span> On Request</p>
              <button className="btn">View More</button>
            </div>
          </SwiperSlide  >
          <SwiperSlide className='card'>
            <img src={`${image2}`} alt="Image 2" />
            <div className="text">
              <p>  Whiteland Urban Resort</p>
              <p> <span><FaLocationDot /></span> Sector 89, Gurugram</p>
              <p> <span><FaRupeeSign /></span> On Request</p>
              <button className="btn">View More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='card'>
            <img src={`${image3}`} alt="Image 3" />
            <div className="text">
              <p>  Whiteland Urban Resort</p>
              <p> <span><FaLocationDot /></span> Sector 89, Gurugram</p>
              <p> <span><FaRupeeSign /></span> On Request</p>
              <button className="btn">View More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className='card'>
            <img src={`${image4}`} alt="Image 4" />
            <div className="text">
              <p> Whiteland Urban Resort</p>
              <p><span><FaLocationDot /></span> Sector 89, Gurugram</p>
              <p> <span><FaRupeeSign /></span> On Request</p>
              <button className="btn">View More</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </div>
  );
};

export default SwiperComponent;