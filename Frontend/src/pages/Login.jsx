import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', { username, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem("username", res.data.username);
      console.log(res.data);
      setAuth(true);
      
      navigate('/');
    } catch (err) {
      console.error(err.message);
      alert('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Welcome to DiaryDev</h1>
        <p>
          Create Your Idea in Here!
        </p>
      </div>
      <div className="right-section">
        <div className="login-card card shadow-lg p-4">
          <h2 className="text-center mb-4">User Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="username"><i className="fa fa-user"></i> Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password"><i className="fa fa-lock"></i> Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group form-check mb-3">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label" htmlFor="remember">Remember</label>
              <a href="/forgot-password" className="float-end">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
