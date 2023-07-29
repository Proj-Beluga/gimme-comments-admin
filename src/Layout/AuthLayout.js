import React from 'react';
import { Outlet } from 'react-router-dom';

import loginPage from '../assets/loginPage.jpg';

export default function AuthLayout() {
  return (
    <>
      <div
        style={{ height: '100vh', width: '100vw' }}
        className="d-flex justify-content-center row m-0"
      >
        <img
          src={loginPage}
          alt="logo"
          style={imgStyle}
          className=" d-none col-md-6 d-md-block p-0"
        />
        <div
          style={{ width: '50%' }}
          className="d-flex flex-column justify-content-center align-items-center col-12 col-md-6 p-4"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

const imgStyle = {
  height: '100%',
  width: '50%',
  objectFit: 'cover',
};
