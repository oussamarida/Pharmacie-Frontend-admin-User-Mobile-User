import React, { useState, useEffect } from 'react';
import './App.css';
import Zone from './pages/Orders/Zone';
import SideBar from './components';
import Ville from './pages/Orders/ville';

function Home() {
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const storedPage = localStorage.getItem('activePage');
    setActivePage(storedPage);
  }, []);

  const handlesetshowVille = () => {
    setActivePage('ville');
    localStorage.setItem('activePage', 'ville');
  };

  const handleshowZone = () => {
    setActivePage('zone');
    localStorage.setItem('activePage', 'zone');
  };

  return (
    <div className='dashboard-container'>
      <SideBar handlesetshowVille={handlesetshowVille} handleshowZone={handleshowZone} />
      <div className='dashboard-body'>
        {activePage === 'ville' && <Ville />}
        {activePage === 'zone' && <Zone />}
      </div>
    </div>
  );
}

export default Home;
