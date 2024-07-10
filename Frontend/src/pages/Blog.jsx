import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Blog.css'; // Pastikan Anda menambahkan file CSS untuk halaman blog jika diperlukan

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('/api/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Blogs</h1>
      <div className="blog-container">
        {blogs.map(blog => (
          <div key={blog._id} className="blog-card">
            <Link to={`/blogs/${blog._id}`} className="text-decoration-none text-dark">
              <div className="blog-image">
                <img src={blog.imageUrl} alt="Blog Image" />
              </div>
              <div className="blog-info">
                <span className="blog-category">{blog.category}</span>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-text">{blog.description}</p>
                <span className="blog-date">{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
