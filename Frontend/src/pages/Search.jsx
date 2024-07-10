import React, { useState } from 'react';
import articles from '../data/articles';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = query.toLowerCase();
    const filteredResults = articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery)
    );
    setResults(filteredResults);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="search-results">
        {results.map((result, index) => (
          <div key={index} className="search-result-item">
            <h3>{result.title}</h3>
            <p>{result.summary}</p>
            <Link to={`/articles/${result.id}`} className="btn btn-primary">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
