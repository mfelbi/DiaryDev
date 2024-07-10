import React from 'react';

const Categories = () => {
  const categories = [
    'Technology',
    'Programming',
    'Web Development',
    'Artificial Intelligence',
    'Data Science',
    'Machine Learning',
    'Blockchain',
    'Cybersecurity',
    'Cloud Computing',
    'DevOps'
  ];

  return (
    <div className="main-content">
      <h1>Categories</h1>
      <p>Explore our blog categories to find articles on the topics that interest you most.</p>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
