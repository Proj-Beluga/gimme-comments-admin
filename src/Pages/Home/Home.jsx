import React from 'react'
import { useNavigate } from 'react-router-dom'

import HomePage from '../../assets/HomePage.png'
import gimmecomments_logo from '../../assets/gimmecomments_logo.png'
import Footer from '../Home/Footer'
const access_token = localStorage.getItem('gimme_comment_access_token')

const Home = () => {
  const navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault()

    if (access_token) {
      navigate('/websites')
    } else {
      navigate('/sign-in')
    }
  }

  function handleStart() {
    navigate('/sign-up')
  }
  return (
    <>
      {/* Navbar  */}
      <nav className="navbar navbar-light bg-light">
        <div className="container ">
          <a href="/" className="navbar-brand font-weight-bold">
            <img
              src={gimmecomments_logo}
              alt="logo"
              style={{ height: '50px', cursor: 'pointer' }}
            />
          </a>

          <form className="d-flex">
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

      {/* Body  */}
      <img
        src={HomePage}
        alt="home"
        style={{ maxHeight: '80vh', width: '100%', objectFit: 'cover' }}
      />

      <div className="container text-center mt-5 ">
        <h1 className="font-weight-bold">Welcome to Gimme Comments</h1>

        <div className="container p-3 rounded-3 bg-light text-dark">
          GimmeComments is an innovative and cutting-edge web application that
          revolutionizes the way developers incorporate comments into their
          projects. With a sleek and user-friendly interface, GimmeComments aims
          to simplify the process of integrating robust commenting functionality
          into websites, applications, and other software projects. This
          powerful and scalable comments server is designed to enhance
          collaboration, feedback gathering, and engagement among developers and
          users.
        </div>
      </div>

      <div className="container mt-5 text-center">
        <button type="button" class="btn btn-primary" onClick={handleStart}>
          Get Started
        </button>
      </div>

      {/* Demo  */}
      <section className="demo container text-center bg-light mt-5">
        <div
          id="gimme-comments-root"
          data-gimme_comments_website_id="64c4baf0c8924de473a6facb"
        ></div>
      </section>

      {/* Footer */}

      <Footer />
    </>
  )
}

export default Home
