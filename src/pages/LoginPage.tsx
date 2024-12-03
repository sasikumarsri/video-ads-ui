import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import './LoginPage.css'; // Scoped styles for login
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';
const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const deviceId = parseInt(JSON.parse(localStorage.getItem('loggedInUser') || '{}').deviceId || '0');
      const response = await login({ username, password, deviceId });
      console.log('Login successful:', response);
      localStorage.setItem('loggedInUser', JSON.stringify(response.data));
      if (response.data.role === 'TV') {
        navigate('/player')
      } else {
        navigate('/users')
      }
      // alert(`Welcome ${response.data.userName}!`);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error('Network or connection error:', error);
      } else {
        console.error('Login failed:', error);
      }
      alert('Invalid username or password.');
    }
  };
  return (
    <div className="login-container">
      <Card className="login-card">
        <img src="https://wishtreetech.com/wp-content/uploads/2023/10/wishtree-blue-logo.svg" alt="" />
        <h2 className='mb-3'>login</h2>
        <div className="p-fluid">
          <div className="p-field mb-3">
            <label htmlFor="username">Email</label>
            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="p-field mb-3">
            <label htmlFor="password">Password</label>
            <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask />
          </div>
          <Button label="Login" icon="pi pi-sign-in" className="p-mt-2 mt-1" onClick={handleLogin} />
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
