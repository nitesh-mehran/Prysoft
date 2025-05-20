import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Blue Header Section with Wave */}
      <div className="relative bg-[#1F22BF]" data-aos="fade-down">
        <div className="text-center text-white py-6 sm:py-8 md:py-10 px-6 sm:px-10 lg:px-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Are you a client who need help?
          </h1>
          <div className="text-white/80 text-sm sm:text-base md:text-lg">
            <Link to="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            Pages
            <span className="mx-2">/</span>
            <span className="underline">Contact</span>
          </div>
        </div>

        {/* Wave */}
        <div className="w-full overflow-hidden leading-[0]" data-aos="fade-up">
          <svg
            className="block w-full h-[100px] sm:h-[130px]"
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

      {/* Contact Section - White Background */}
      <section className="bg-white min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-16">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-800 mb-2">Contact Us</h2>
          <h3 className="text-2xl font-semibold text-gray-900">
            Contact For Any Query
          </h3>
          <div className="w-12 h-1 bg-black mx-auto mt-2 rounded" />
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-3xl space-y-6" data-aos="zoom-in-up">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
              data-aos="fade-right"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
              data-aos="fade-left"
            />
          </div>

          <textarea
            rows={4}
            placeholder="Message"
            className="w-full px-5 py-4 border border-gray-300 rounded-lg shadow-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-md transition"
            data-aos="fade-up"
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white text-lg font-semibold py-4 rounded-lg hover:bg-blue-900 transition duration-300"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
