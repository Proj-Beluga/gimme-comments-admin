import React from 'react';
import { useNavigate } from 'react-router-dom';

import HomeImage from '../../assets/HomePage.png';
import SideImage from '../../assets/Side Image Gimme Comments.jpg';

const Home = () => {
  const navigate = useNavigate();

  function handleStart() {
    navigate('/sign-up');
  }
  return (
    <>
      <img
        src={HomeImage}
        alt="home"
        style={{ maxHeight: '80vh', width: '100%', objectFit: 'cover' }}
      />

      <section className="container text-center mt-5 ">
        <h1 className="font-weight-bold my-3">Welcome to Gimme Comments</h1>

        <div className="row g-0 rounded-4 overflow-hidden shadow-lg">
          <div className="col-12 col-md-6 bg-light text-dark fs-5 p-4">
            <p>
              <span className="bg-dark fw-light px-2">Gimme Comments</span> is
              an innovative and cutting-edge web application that revolutionizes
              the way developers incorporate comments into their projects. With
              a sleek and user-friendly interface, Gimme Comments aims to
              simplify the process of integrating robust commenting
              functionality into websites, applications, and other software
              projects. This powerful and scalable comments server is designed
              to enhance collaboration, feedback gathering, and engagement among
              developers and users.
            </p>
            <button
              type="button"
              className="btn btn-primary my-4 fw-bold d-block d-inline-flex"
              onClick={handleStart}
            >
              Get Started
            </button>
          </div>
          <img
            src={SideImage}
            alt="man using gimme comments"
            className="col-12 col-md-6 p-0"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
