import React from 'react';
import Home from '../home/Home';
import AboutUs from '../about-us/AboutUs';
import News from '../news/News';
import NewsItem from '../news/NewsItem';
import ContactUs from '../contact-us/ContactUs';
import Login from '../login/Login';
import SignUp from '../sign-up/SignUp';

import NavBar from './Navbar';
import Footer from './Footer';
import { Route, Routes, Navigate } from 'react-router-dom';

const showStatus = "all";
export const NavRoutes = () => {
  return (
    <div>
      <NavBar />
        <Routes>
            <Route exact path="/Home" element={<Home/>} />
            <Route path="/" element={<Navigate replace to="/Home" />} />
            <Route exact path="/AboutUs" element={<AboutUs/>} />
            <Route exact path="/News" element={<News showStatus={showStatus}/>} />
            <Route exact path="/ContactUs" element={<ContactUs/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/SignUp" element={<SignUp/>} />
            <Route exact path="/NewsItem/:id" element={<NewsItem/>} />
        </Routes>
      <Footer />
    </div>
  );
};