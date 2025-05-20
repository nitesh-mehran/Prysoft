import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const defaultPosts = [
    {
      title: "Exploring the Power of AI",
      image: "nitish.jpg",
      author: "Rachana Meena",
      date: "2025-04-10",
    },
    {
      title: "Mastering Instagram in 2025",
      image: "nitish.jpg",
      author: "Rachana Meena",
      date: "2025-04-11",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogPosts")) || [];
    setPosts([...stored, ...defaultPosts]);
  }, []);

  const recentPosts = posts.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#1F22BF] text-white pb-20">
        <div className="text-center py-16 px-6 sm:px-10 lg:px-20" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Explore Our Blog Wonderland: Where Ideas Meet Everyday Brilliance.
          </h1>
          <div className="text-white/80 text-sm sm:text-base">
            <Link to="/" className="hover:underline">Home</Link> 
            <span className="mx-2">/</span> 
            Pages 
            <span className="mx-2">/</span> 
            <span className="underline">Blog</span>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[150px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 sm:p-12 space-y-20 bg-white">
        {/* Main & Recent Section */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Post */}
          <div className="flex-1">   
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Insights</h1>
            <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img
                src={recentPosts[0]?.image}
                alt="Main"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Recent Posts */}
          <div className="w-full lg:w-1/3 mt-10 lg:mt-20">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Recent Posts</h2>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-lg border border-gray-200 flex items-center gap-4 p-3 shadow hover:shadow-md rounded-lg transition-all duration-300"
                >
                  <div className="w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
                    <img src={post.image} alt="thumb" className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-800">{post.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Blog Cards */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center justify-center">
           Newest Stories Just In: Stay updated with our latest blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500 "
                />
                <div className="p-5">
                  <p className="text-sm text-indigo-600 mb-1 flex justify-center items-center">By {post.author}</p>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-500 text-sm flex justify-center items-center">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
