import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import md5 from 'md5';
import CryptoJS from 'crypto-js';
import image from './imagee.jpg';


function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [loginStatus, setLoginStatus] = useState(true);

  const navigate = useNavigate();

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (user==="admin" && password==="admin") {
      const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user,password), 'YourSecretKey').toString();
      navigate(`/home?user=${encodeURIComponent(encryptedUser)}`);
    } else {
      setLoginStatus(false);
    }
  };

  return (
    <div className="divlogin">
      <div className="container3">
        <div className="myform">
          <form onSubmit={handleSubmit}>
            <h2>ADMIN LOGIN</h2>
            <input type="text" placeholder="Admin Name" value={user} onChange={handleUserChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            {!loginStatus && (
            <div style={{ marginTop: '0.5cm', color: 'red', textAlign: 'center', fontFamily: 'serif', fontSize: 20 }}>
              Incorrect username or password.
            </div>
          )}
            <button type="submit">LOGIN</button>
          </form>
        </div>
        <div className="image">
          <img src={image} alt="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
