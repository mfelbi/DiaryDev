import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get('/api/articles');
      setArticles(res.data);
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <h1>Articles</h1>
      <div className="row">
        {articles.map(article => (
          <div className="col-md-4" key={article._id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
