import React, { useState } from 'react';
import axios from 'axios';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    axios.post('http://localhost:8080/api/bank/login', null, { params: { username } })
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        alert('Login failed');
      });
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;
