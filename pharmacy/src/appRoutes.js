import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import List from "./pages/list";
import Login from './pages/login';
import App from './pages/User/user';
import Signup from './pages/signup';

function AppRouter() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="list" element={<List />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="User" element={<App />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </BrowserRouter>
  );
}
//   < Route exact path="/Login" component={Login} />
export default AppRouter;