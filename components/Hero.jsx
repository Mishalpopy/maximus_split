"use client"
// components/HeroSlider.js
// components/HeroSlider.js
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


gsap.registerPlugin(ScrollTrigger);

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000, // Change to 3000 milliseconds (3 seconds)
    prevArrow: <CustomLeftArrow />, // Custom left arrow component
    nextArrow: <CustomRightArrow />, // Custom right arrow component
  };

  const sliderRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const slider = sliderRef.current;
    const slides = slideRefs.current;

    slides.forEach((slide, index) => {
      gsap.fromTo(
        slide,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: slide,
            start: 'top center',
            end: 'center center',
            scrub: true,
          },
        }
      );
    });

    gsap.to(slider, { opacity: 1, duration: 1 });

    return () => {
      slides.forEach((slide) => {
        ScrollTrigger.getTweensOf(slide).forEach((tween) => tween.kill());
      });
    };
  }, []);

  // Custom left arrow component
  function CustomLeftArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-left" onClick={onClick}>
        &lt; {/* Left arrow */}
      </div>
    );
  }

  // Custom right arrow component
  function CustomRightArrow(props) {
    const { onClick } = props;
    return (
      <div className="custom-arrow custom-right" onClick={onClick}>
        &gt; {/* Right arrow */}
      </div>
    );
  }

  return (
    <div className="hero-slider" style={{ width: '100vw', height: '85vh', overflow: 'hidden' }}>
      <Slider {...settings} ref={sliderRef}>
        <div ref={(el) => (slideRefs.current[0] = el)} style={{ width: '100vw' }}>
          <div className="slide-content">
           
           <img
            src='/banner-hero.jpg'
            

            />


            <div className="title-container left-title">
              <h2 className="slide-title">Explore our <br></br>New Summer Range 
							</h2>
           <button href="/" className='btnBlack'>Read More</button>
            </div>
          </div>
          
        </div>
        <div ref={(el) => (slideRefs.current[1] = el)} style={{ width: '100vw', height: '85vh' }}>
          <div className="slide-content">
            <video autoPlay loop muted className="slide-video">
              <source src="/video-hero.mp4" type="video/mp4" />
            </video>
            <div className="title-container left-title">
              <h2 className="slide-title">Explore our <br></br>New Summer Range 
							</h2>
           <button href="/" className='btnBlack'>Read More</button>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default HeroSlider;
