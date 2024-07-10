import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaUserPlus, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ auth, handleLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar"> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/src/assets/image/LogoDiaryDev.png" alt="DiaryDev Logo" className="navbar-logo bottom , right , top , bottom" /> 
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item search-bar-right search-bar-top"> 
              <form onSubmit={handleSearchSubmit} className="search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">
                  <FaSearch />
                </button>
              </form>
            </li>
            {auth ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-decoration-none text-white" onClick={handleLogout}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <FaUser /> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <FaUserPlus /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
