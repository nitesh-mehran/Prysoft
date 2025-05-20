import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams(); // URL se ID nikalna
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const matchedPost = stored.find((p) => p.id === parseInt(id));
    if (matchedPost) {
      setPost(matchedPost);
    } else {
      alert("Blog not found!");
      navigate("/blog");
    }
  }, [id, navigate]);

  if (!post) return null;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-teal-700 mb-2">By - {post.author}</p>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p className="text-lg text-gray-800">{post.content}</p>
    </div>
  );
};

export default BlogDetails;
