import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { useStore } from '../Contexts/StoreContext';

import HomeNavigationBar from '../Components/NavigationBar';
import HomeFooter from '../Components/Footer';
import Header from '../Layout/Header';
import Menu from '../Layout//Menu';
import Footer from '../Layout//Footer';
import AuthLayout from '../Layout/AuthLayout';

import Home from '../Pages/Home/Home';
import Demo from '../Pages/Demo/Demo';

import Login from '../Pages/Auth/Login/Login';
import SignUp from '../Pages/Auth/SignUp/SignUp';
import VerifyAccount from '../Pages/Auth/VerifyAccount/VerifyAccount';
import ForgetPassword from '../Pages/Auth/ForgetPassword/ForgetPassword';
import Websites from '../Pages/Websites/Websites';

import Profile from '../Pages/Profile/Profile';

export default function Routing() {
  const { isLoading, setIsLoading } = useStore();

  const WithNav = () => {
    return (
      <>
        <HomeNavigationBar />
        <Outlet />
        <HomeFooter />
      </>
    );
  };

  return (
    <div
      className="wrapper"
      style={{ overflowX: 'hidden', position: 'relative' }}
    >
      <div
        style={{
          display: isLoading ? 'grid' : 'none',
          position: 'fixed',
          zIndex: 1060,
          height: '100vh',
          width: '100vw',
          placeItems: 'center',
          background: 'rgba(0,0,0,0.4)',
        }}
      >
        <div className="spinner-border" role="status">
          <div className="visually-hidden">Loading...</div>
        </div>
      </div>
      <div
        style={{
          display: isLoading ? 'flex' : 'none',
          position: 'fixed',
          zIndex: 1000,
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'end',
          padding: '20px',
        }}
      >
        <button className="btn btn-dark" onClick={() => setIsLoading(false)}>
          Close
        </button>
      </div>

      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Route>
        <Route element={<UnprotectedRoute />}>
          <Route element={<AuthLayout />}>
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/verify-account" element={<VerifyAccount />} />
            <Route exact path="/forget-password" element={<ForgetPassword />} />
          </Route>
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/websites" element={<Websites />} />

          {/* will manage all questions inside one quiz section */}
        </Route>
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

const ProtectedRoute = () => {
  const access_token = localStorage.getItem('access_token');

  if (access_token) {
    return (
      <>
        <Header />
        <Menu />
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/sign-in" />;
  }
};

const UnprotectedRoute = () => {
  const access_token = localStorage.getItem('access_token');

  if (access_token) {
    return (
      <>
        <Navigate to="/websites" />
      </>
    );
  } else {
    return <Outlet />;
  }
};
