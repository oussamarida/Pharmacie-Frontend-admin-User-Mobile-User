import React, { useEffect, useState } from 'react';
import './css/login.css';
import { useNavigate } from 'react-router-dom';
import md5 from 'md5';
import CryptoJS from 'crypto-js';

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

  useEffect(() => {
    fetch('http://localhost:8082/User/all')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const encryptedPassword = md5(password);
    const foundUser = users.find(
      (fetchedUser) => user === fetchedUser.email && encryptedPassword === fetchedUser.password
    );
    if (foundUser) {
      const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(foundUser), 'YourSecretKey').toString();
      navigate(`/User?user=${encodeURIComponent(encryptedUser)}`);
    } else {
      setLoginStatus(false);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="divlogin">
      <h1 style={{ marginLeft: '2.5cm', fontFamily: 'Comic Sans MS', color: 'green' }}>Pharmacie Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="Forms">
          <div>
            <label htmlFor="userInp" className="inp">
              <input type="text" id="userInp" placeholder="&nbsp;" value={user} onChange={handleUserChange} />
              <span className="label">User</span>
              <span className="focus-bg"></span>
            </label>
          </div>
          <div style={{ marginTop: '0.7cm' }}>
            <label htmlFor="passwordInp" className="inp">
              <input
                type="password"
                id="passwordInp"
                placeholder="&nbsp;"
                value={password}
                onChange={handlePasswordChange}
              />
              <span className="label">Password</span>
              <span className="focus-bg"></span>
            </label>
          </div>

          {!loginStatus && (
            <div style={{ marginTop: '0.5cm', color: 'red', textAlign: 'center', fontFamily: 'serif', fontSize: 20 }}>
              Incorrect username or password.
            </div>
          )}

          <div style={{ marginTop: '0.8cm', marginLeft: '0.10cm' }}>
            <div style={{ marginBottom: '1cm', marginLeft: '0.8cm' }}>
              <button
                type="submit"
                style={{
                  borderRadius: '4cm',
                  color: 'green',
                  width: '5cm',
                  height: '1cm',
                  boxShadow: '-moz-initial',
                }}
              >
                Login
              </button>
            </div>
            <div style={{ marginBottom: '1cm', marginLeft: '0.8cm' }}>
              <button
                type="button"
                style={{
                  backgroundColor:'gray',
                  borderRadius: '4cm',
                  color: 'black',
                  width: '5cm',
                  height: '1cm',
                  boxShadow: '-moz-initial',
                }}
                onClick={handleSignup}
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
