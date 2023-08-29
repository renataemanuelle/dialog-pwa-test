import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage/User';
import Header from './components/Header/Header';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
