import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeSection.css';

const WelcomeSection = () => {
  return (
    <div className="welcome-section text-center my-5">
      <h1>Welcome to <span className="highlight">DiaryDev</span></h1>
      <p>
        Here you will find an up-to-date collection of accessible components and blogs 
        related to technology, programming, web development, etc. Browse beautifully designed 
       , Tech Journal,  
        you can drop into your projects, idea and customize to your heart's content.
      </p>
      <div className="buttons">
        <Link to="/components" className="btn btn-primary me-3">Browse Idea →</Link>
        <Link to="/blogs" className="btn btn-secondary">Explore Blogs →</Link>
      </div>
    </div>
  );
};

export default WelcomeSection;
