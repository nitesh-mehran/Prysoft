import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

import { toast } from 'sonner';



const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_h5806c2",
      "template_0bxp6hv",
      formData,
      "lPxMuAz56v9GE6-7n"
    )
    .then(
      () => {
        toast.success(" Message sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      },
      () => {
        toast.error(" Failed to send message. Please try again.");
      }
    );
};


  return (
    <>
      <div className="relative bg-[#1F22BF] pb-20">
        <div
          className="text-center text-white py-10 sm:py-12 md:py-16 px-6 sm:px-10 lg:px-20"
          data-aos="fade-down"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            A glimpse of our journey full of contentment and bliss.
          </h1>
          <div className="text-white/80 text-sm sm:text-base md:text-lg">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            Pages
            <span className="mx-2">/</span>
            <span className="underline">Contact</span>
          </div>
        </div>

        {/* Wave */}
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

      {/* Contact Section */}
      <section className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-800 mb-2">Contact Us</h2>
          <p className="text-xl font-medium text-gray-700">
            Contact For Any Query
          </p>
          <div className="w-12 h-1 bg-black mx-auto mt-2 rounded" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl space-y-6"
          data-aos="zoom-in-up"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border border-gray-300 rounded-lg"
              data-aos="fade-right"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border border-gray-300 rounded-lg"
              data-aos="fade-left"
            />
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-4 border border-gray-300 rounded-lg resize-y"
            data-aos="fade-up"
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-4 rounded-lg font-semibold hover:bg-blue-900 transition"
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
