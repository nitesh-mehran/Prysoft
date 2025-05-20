import React from "react";

const AboutBottom = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12 bg-white space-y-12 sm:space-y-16 max-w-full mx-auto overflow-x-hidden">
      {/* Section Header + Mission */}
      <div data-aos="fade-up" className="max-w-screen-xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">Our Mission</h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            As the company expands, clients increase.
          </h2>
          <div className="w-12 h-1 bg-black mx-auto mt-3 rounded" />
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-4 sm:gap-6 lg:gap-10 max-w-screen-xl mx-auto">
          {/* Text Section */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">What we do?</h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              As the company will expand, clients will increase. We train our team to learn about executing a secure data environment. As managed IT providers, we specialize in cybersecurity.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We consistently modernize and improve client systems to avoid interruptions. We also help in digital transformation processes for clients and businesses to grow their internet sales.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img
              src="/about_mission1.png"
              alt="Mission Visual"
              className="w-full max-w-full h-96 object-contain mx-auto"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 max-w-screen-xl mx-auto" data-aos="fade-up">
        {/* Left Image */}
        <div className="w-full lg:w-1/2" data-aos="zoom-in">
          <img
            src="/about_infographic.png"
            alt="Process Graphic"
            className="w-full max-w-full h-auto object-contain mx-auto"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">How we do?</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We have a team of highly skilled IT specialists who provide expert guidance and oversight across various applications.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our specialists use a wide range of expertise to solve client problems efficiently.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">Who we do it for?</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We work for our clients and businesses, applying our specialized skills, knowledge, and resources.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We offer IT services, digitalization, web and app development, and complete tech solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBottom;
