import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const AboutTop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative bg-[#1F22BF] pb-20">
      {/* Top Content */}
      <div className="text-center text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12" data-aos="fade-down">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Welcome to Prysoft, We are Delighted and Thankful
          <br />
           You're here!
        </h1>
        <div className="text-white/80 text-sm sm:text-base md:text-lg">
          <Link to="/" className="hover:underline">Home</Link> 
          <span className="mx-2">/</span> 
          Pages 
          <span className="mx-2">/</span> 
          <span className="underline">About</span>
        </div>
      </div>

      {/* SVG Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[120px] sm:h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutTop;
