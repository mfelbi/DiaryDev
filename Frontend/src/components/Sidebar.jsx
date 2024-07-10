import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaHome, FaPlusCircle, FaSignOutAlt, FaUser, FaTags, FaList, FaChartLine, FaUsers, FaInfoCircle, FaEnvelopeOpen, FaComments } from 'react-icons/fa';

const Sidebar = ({ auth, role, handleLogout }) => {
  return (
    <div className="sidebar custom-sidebar p-3"> 
      <h2>Hi !</h2>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
            <FaHome className="me-2" /> Home
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/categories" className="text-decoration-none text-dark d-flex align-items-center">
            <FaList className="me-2" /> Categories
          </Link>
        </li>
        {auth ? (
          <>
            {/* <li className="mb-3">
              <Link to="/dashboard" className="text-decoration-none text-dark d-flex align-items-center">
                <FaChartLine className="me-2" /> Dashboard
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/create" className="text-decoration-none text-dark d-flex align-items-center">
                <FaPlusCircle className="me-2" /> Create Post
              </Link>
            </li> */}
            <li className="mb-3">
              <Link to="/profile" className="text-decoration-none text-dark d-flex align-items-center">
                <FaUser className="me-2" /> Profile
              </Link>
            </li>
            {role === 'superuser' && (
              <li className="mb-3">
                <Link to="/user-management" className="text-decoration-none text-dark d-flex align-items-center">
                  <FaUsers className="me-2" /> User Management
                </Link>
              </li>
            )}
            {/* <li className="mb-3">
              <button 
                className="btn btn-link text-decoration-none text-dark d-flex align-items-center p-0" 
                onClick={handleLogout}
              >
                <FaSignOutAlt className="me-2" /> Logout
              </button>
            </li> */}
          </>
        ) : (
          <>
          </>
        )}
        {/* <li className="mb-3">
          <Link to="/tags" className="text-decoration-none text-dark d-flex align-items-center">
            <FaTags className="me-2" /> Popular Tags
          </Link>
        </li> */}
        <li className="mb-3">
          <Link to="/discussions" className="text-decoration-none text-dark d-flex align-items-center">
            <FaComments className="me-2" /> Discussions
          </Link>
        </li>
        {/* <li className="mb-3">
          <Link to="/recent-posts" className="text-decoration-none text-dark d-flex align-items-center">
            <FaBook className="me-2" /> Recent Posts
          </Link>
        </li> */}
        {/* <li className="mb-3">
          <Link to="/contact" className="text-decoration-none text-dark d-flex align-items-center">
            <FaEnvelopeOpen className="me-2" /> Contact Us
          </Link>
        </li> */}
        <li className="mb-3">
          <Link to="/about" className="text-decoration-none text-dark d-flex align-items-center">
            <FaInfoCircle className="me-2" /> About Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;


