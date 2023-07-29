import React from 'react';
import { useNavigate } from 'react-router-dom';
import gimmecomments_logo from '../assets/gimmecomments_logo.png';

const access_token = localStorage.getItem('access_token');

const NavigationBar = () => {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    if (access_token) {
      navigate('/websites');
    } else {
      navigate('/sign-in');
    }
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container ">
          <img
            src={gimmecomments_logo}
            alt="logo"
            style={{ height: '50px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />

          <form className="d-flex gap-2">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={() => navigate('/demo')}
            >
              Demo
            </button>
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleClick}
            >
              Dashboard
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
