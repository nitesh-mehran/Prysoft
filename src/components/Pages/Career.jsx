import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Career = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    jobProfile: "",
    experience: "",
    noticePeriod: "",
  });

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
      .sendForm(
        "service_h5806c2",
        "template_29kb3hs",
        formRef.current,
        "lPxMuAz56v9GE6-7n"
      )
      .then(
        (result) => {
          toast.success("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            contact: "",
            jobProfile: "",
            experience: "",
            noticePeriod: "",
          });
        },
        (error) => {
          toast.error("Please fill required fields!");
        }
      );
  };

  const CareerTop = () => (
    <div className="relative bg-[#1F22BF] pb-20">
      <div
        className="text-center text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12"
        data-aos="fade-down"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Come join us in your pursuit of better practice
        </h1>
        <div className="text-white/80 text-sm sm:text-base md:text-lg">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          Pages
          <span className="mx-2">/</span>
          <span className="underline">Career</span>
        </div>
      </div>

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

  return (
    <>
      <CareerTop />

      <div className="bg-white min-h-screen py-10 px-4 sm:px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Section - Form */}
          <div data-aos="fade-right">
            <div className="mb-8 text-center md:text-left md:ml-12" data-aos="fade-up">
              <h2 className="text-blue-800 font-semibold text-lg">🔷 Job Opportunities</h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Fill This Form
              </h1>
              <div className="w-16 h-1 bg-black mt-4 mx-auto md:mx-0"></div>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md"
              data-aos="fade-up"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
                <input
                  type="text"
                  name="jobProfile"
                  placeholder="Job Profile"
                  value={formData.jobProfile}
                  onChange={handleChange}
                  required
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
                <input
                  type="text"
                  name="experience"
                  placeholder="Job Experience"
                  value={formData.experience}
                  onChange={handleChange}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
                <input
                  type="text"
                  name="noticePeriod"
                  placeholder="Notice Period"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  data-aos="fade-up"
                  data-aos-delay="350"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-md transition duration-200"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center items-center h-full" data-aos="fade-left">
            <img
              src="/career.jpeg"
              alt="Career Growth"
              className="w-full max-w-md h-auto object-cover rounded-xl shadow"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
