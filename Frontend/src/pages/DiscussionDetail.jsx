import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DiscussionDetail = () => {
  const { id } = useParams();
  const [discussion, setDiscussion] = useState({});
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchDiscussion = async () => {
      const res = await axios.get(`/api/discussions/${id}`);
      setDiscussion(res.data);
    };

    fetchDiscussion();
  }, [id]);

  const addComment = async () => {
    const res = await axios.post(`/api/discussions/${id}/comments`, { content: comment });
    setDiscussion(res.data);
    setComment('');
  };

  return (
    <div className="main-content">
      <h1>{discussion.title}</h1>
      <p>{discussion.content}</p>
      <small>Oleh: {discussion.user && discussion.user.username}</small>
      <div>
        <h2>Komentar</h2>
        <ul className="list-group">
          {discussion.comments && discussion.comments.map(comment => (
            <li key={comment._id} className="list-group-item">
              <p>{comment.content}</p>
              <small>Oleh: {comment.user && comment.user.username}</small>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <textarea
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tambahkan komentar..."
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={addComment}>Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default DiscussionDetail;
