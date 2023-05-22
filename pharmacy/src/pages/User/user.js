import React, { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';


import './App.css';
import Orders from './pages/Orders';
import { useLocation } from 'react-router-dom';
import Profil from './pages/Orders/Profil';
import SideBarr from './components/Sidebar';
import Garde from './pages/Orders/garde';

function App() {


 const [user , setusers]=useState({})
 const [pharmacie , setPharmacie]=useState({})
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const encodedUser = searchParams.get('user');

  useEffect(() => {
    const decryptedBytes = CryptoJS.AES.decrypt(encodedUser, 'YourSecretKey');
    const decryptedUser = decryptedBytes.toString(CryptoJS.enc.Utf8);
    const user = JSON.parse(decryptedUser);
    
    setusers(user);
    setPharmacie(user.pharmacie);
    console.log(user.pharmacie)
  }, []);

  const [showOrders, setShowOrders] = useState(true);

  const handleToggleOrders = () => {
    setShowProfile(false);
    setshowGarde(false);
    setShowOrders(true);
  };

  const [showGarde, setshowGarde] = useState(false);

  const handleshowGarde = () => {
    setShowProfile(false);
    setShowOrders(false);
    setshowGarde(true);
  };

  const [showProfile, setShowProfile] = useState(false);

  const handleToggleProfile = () => {
    setShowOrders(false);
    setshowGarde(false);
    setShowProfile(true);
  };

  
  return (
    <div className='dashboard-container'>
      <SideBarr handleToggleOrders={handleToggleOrders} handleToggleProfile={handleToggleProfile}  handleshowGarde={handleshowGarde}/>
      <div className='dashboard-body'>
        {showOrders && pharmacie && <Orders user={user} pharmacie={pharmacie} />}
        {showProfile &&  pharmacie && <Profil user={user}  />}
        {showGarde &&  pharmacie && <Garde pharmacie={pharmacie}  />}
      </div>
    </div>
  );
}

export default App;