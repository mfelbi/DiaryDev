import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaThumbsUp, FaShare } from 'react-icons/fa';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}/comments`);
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlog();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    try {
      await axios.post(`/api/blogs/${id}/comments`, { text: comment }, config);
      setComment('');
      fetchComments();
    } catch (err) {
      console.error(err);
      alert('Error adding comment');
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <div className="blog-meta">
        <span>Category: {blog.category}</span>
        <span>Author: {blog.author.username}</span>
        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="blog-actions">
        <button className="btn btn-primary">
          <FaThumbsUp /> Like
        </button>
        <button className="btn btn-secondary">
          <FaShare /> Share
        </button>
      </div>
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.map(comment => (
          <div key={comment._id} className="comment">
            <p>{comment.text}</p>
            <span>{comment.author.username}</span>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <textarea
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetail;
