import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="card mb-3">
      <img src={article.image} className="card-img-top" alt={article.title} />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <Link to={`/articles/${article._id}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
};

export default ArticleCard;
