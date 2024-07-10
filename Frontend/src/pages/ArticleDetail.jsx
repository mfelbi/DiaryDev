import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import articles from '../data/articles'; 
import './ArticleDetail.css';

const ArticleDetail = ({ auth }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/api/comments/${id}`);
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (auth) {
      const fetchUser = async () => {
        try {
          const res = await axios.get('/api/users/me', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          setUsername(res.data.username);
        } catch (err) {
          console.error(err);
        }
      };
      fetchUser();
    }

    fetchComments();
  }, [id, auth]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const comment = auth ? { articleId: id, content: newComment } : { articleId: id, content: newComment, email };
    try {
      const res = await axios.post('/api/comments', comment, {
        headers: auth ? { 'Authorization': `Bearer ${localStorage.getItem('token')}` } : {}
      });
      setComments([...comments, res.data]);
      setNewComment('');
      if (!auth) setEmail('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4 article-detail">
      <div className="row">
        <div className="col-md-8">
          <div className="article-header">
            <img src={article.image} className="img-fluid mb-4" alt={article.title} />
            <h1 className="mb-4">{article.title}</h1>
            <div className="lead article-content">
              {showFullContent ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div>
                  {article.content.substring(0, 300)}...
                  <button className="btn btn-link p-0" onClick={() => setShowFullContent(true)}>Baca lebih lanjut</button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <form onSubmit={handleCommentSubmit} className="mt-4">
            {!auth && (
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Tambahkan Komentar</label>
              <textarea
                id="comment"
                className="form-control"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Kirim</button>
          </form>
        </div>
      </div>

      <hr className="divider" />

      <div className="article-comments">
        <h3 className="mt-5">Komentar</h3>
        {comments.map((comment, index) => (
          <div key={index} className={`comment-box border p-3 mb-3 ${comment.userId ? 'user-comment' : 'guest-comment'}`}>
            <strong>{comment.userId ? comment.userId.username : comment.email}</strong>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleDetail;
