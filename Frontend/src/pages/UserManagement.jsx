import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  const deleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(users.filter(user => user._id !== id));
      } catch (err) {
        console.error(err);
        alert('Error deleting user');
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User Management</h1>
      <ul className="list-unstyled">
        {users.map(user => (
          <li key={user._id}>
            {user.username} ({user.email}) 
            <button onClick={() => deleteUser(user._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
