import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles'; // Importing the articles data
import WelcomeSection from '../components/WelcomeSection';
import './Home.css'; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-content">
      <WelcomeSection /> {/* Add the WelcomeSection component */}
      <h2 className="mt-5 mb-4">Articles for you</h2>
      <div className="articles-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-info">
              <h5 className="article-title">{article.title}</h5>
              <p className="article-summary">{article.summary}</p>
              <Link to={`/articles/${article.id}`} className="btn btn-primary">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
