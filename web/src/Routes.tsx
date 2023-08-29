import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/User';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
