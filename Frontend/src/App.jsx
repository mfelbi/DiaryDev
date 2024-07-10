import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Categories from './pages/Categories';
import Tags from './pages/Tags';
import RecentPosts from './pages/RecentPost';
import Search from './pages/Search';
import PostDetail from './pages/PostDetail';
import UserManagement from './pages/UserManagement';
import Components from './pages/Components'; 
import Blogs from './pages/Blog'; 
import AboutUs from '../src/pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DiscussionList from './pages/DoscussionList';
import DiscussionDetail from './pages/DiscussionDetail';
import Blog from './pages/Blog';
import CreateBlog from './pages/CreateBlog';
import BlogDetail from './pages/BlogDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        setAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    setRole('');
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar auth={auth} handleLogout={handleLogout} />
        <div className="d-flex flex-grow-1">
          <Sidebar auth={auth} role={role} />
          <div className="main-content-wrapper flex-grow-1">
            <MainContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={auth ? <CreatePost /> : <Login setAuth={setAuth} />} />
                <Route path="/edit/:id" element={auth ? <EditPost /> : <Login setAuth={setAuth} />} />
                <Route path="/login" element={<Login setAuth={setAuth} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={auth ? <Profile /> : <Login setAuth={setAuth} />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/tags" element={<Tags />} />
                <Route path="/recent-posts" element={<RecentPosts />} />
                <Route path="/search" element={<Search />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/user-management" element={role === 'superuser' ? <UserManagement /> : <Home />} />
                <Route path="/components" element={<Components />} /> 
                <Route path="/blogs" element={<Blogs />} /> 
                <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/discussions" element={<DiscussionList />} />
                <Route path="/discussions/:id" element={<DiscussionDetail />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/create-blog" element={auth ? <CreateBlog /> : <Login setAuth={setAuth} />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticleDetail auth={auth} />} />
</Routes>
            </MainContent>
          </div>
        </div>
        {location.pathname.startsWith('/articles') && <Footer />} {/* Kondisi untuk tidak menampilkan footer di halaman detail artikel */}
      </div>
    </Router>
  );
};

export default App;
