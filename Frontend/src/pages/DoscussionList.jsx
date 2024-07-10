import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DiscussionList = () => {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const fetchDiscussions = async () => {
      const res = await axios.get('/api/discussions');
      setDiscussions(res.data);
    };

    fetchDiscussions();
  }, []);

  return (
    <div className="main-content">
      <h1>Forum Diskusi</h1>
      <ul className="list-group">
        {discussions.map(discussion => (
          <li key={discussion._id} className="list-group-item">
            <Link to={`/discussions/${discussion._id}`}>
              {discussion.title}
            </Link>
            <p>{discussion.content}</p>
            <small>Oleh: {discussion.user.username}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscussionList;
