import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    image: "",
    author: "", // ⬅️ Author user bharega manually
    date: new Date().toISOString().slice(0, 10), // ⬅️ Date auto-filled
  });

  const [fileError, setFileError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setFileError("Image must be less than 4MB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPost({ ...post, image: reader.result });
        setFileError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!post.title.trim()) {
      alert("Title is required!");
      return;
    }

    if (!post.author.trim()) {
      alert("Author is required!");
      return;
    }

    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    const updatedPosts = [post, ...existingPosts];

    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

    alert("Blog added successfully!");
    navigate("/blog");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Add New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border p-2 rounded"
          onChange={handleImageChange}
        />
        {fileError && <p className="text-red-500 text-sm">{fileError}</p>}
        {post.image && (
          <img
            src={post.image}
            alt="Preview"
            className="w-full h-48 object-cover rounded"
          />
        )}

        <input
          type="text"
          placeholder="Author Name"
          className="w-full border p-2 rounded"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          required
        />

        <input
          type="text"
          className="w-full border p-2 rounded bg-gray-100 cursor-not-allowed"
          value={post.date}
          disabled
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
