import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './login/login';


function AppRouter() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="Home" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
  );
}
//   < Route exact path="/Login" component={Login} />
export default AppRouter;