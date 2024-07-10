// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CommentList = ({ articleId, auth }) => {
//   const [comments, setComments] = useState([]);
//   const [content, setContent] = useState('');
//   const [email, setEmail] = useState('');
//   const token = localStorage.getItem('token');

//   const fetchComments = async () => {
//     const res = await axios.get(`/api/comments/${articleId}`);
//     setComments(res.data);
//   };

//   const addComment = async (e) => {
//     e.preventDefault();
//     if (!content) return;

//     const commentData = { articleId, content };
//     if (!auth) {
//       commentData.email = email;
//     }

//     const config = {
//       headers: {}
//     };
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     try {
//       const res = await axios.post('/api/comments', commentData, config);
//       setContent('');
//       setEmail('');
//       setComments([...comments, res.data]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, [articleId]);

//   return (
//     <div>
//       <h5>Comments</h5>
//       <ul className="list-unstyled">
//         {comments.map(comment => (
//           <li key={comment._id}>
//             <strong>{comment.userId ? comment.userId.username : comment.email}:</strong> {comment.content}
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={addComment}>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             rows="3"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Add a comment"
//           ></textarea>
//         </div>
//         {!auth && (
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Your email"
//               required
//             />
//           </div>
//         )}
//         <button type="submit" className="btn btn-primary">Comment</button>
//       </form>
//     </div>
//   );
// };

// export default CommentList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ articleId, auth }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');
  const token = localStorage.getItem('token');

  const fetchComments = async () => {
    const res = await axios.get(`/api/comments/${articleId}`);
    setComments(res.data);
  };

  const addComment = async (e) => {
    e.preventDefault();
    if (!content) return;

    const commentData = { articleId, content };
    if (!auth) {
      commentData.email = email;
    }

    const config = {
      headers: {}
    };
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const res = await axios.post('/api/comments', commentData, config);
      setContent('');
      setEmail('');
      setComments([...comments, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  return (
    <div>
      <h5>Comments</h5>
      <ul className="list-unstyled">
        {comments.map(comment => (
          <li key={comment._id}>
            <strong>{comment.userId ? comment.userId.username : comment.email}:</strong> {comment.content}
          </li>
        ))}
      </ul>
      <form onSubmit={addComment}>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a comment"
          ></textarea>
        </div>
        {!auth && (
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Comment</button>
      </form>
    </div>
  );
};

export default CommentList;
