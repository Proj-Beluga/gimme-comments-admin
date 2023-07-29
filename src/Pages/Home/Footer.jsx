import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer className="" style={{ background: '#506AD4' }}>
        <Container
          fluid="xxl"
          className="p-5 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="wrapper">
            <div
              className="button-social"
              onClick={() =>
                window.open(
                  'https://github.com/Proj-Beluga/gimme-comments-admin',
                )
              }
            >
              <div className="icon">
                <i className="fab fa-github"></i>
              </div>
              <span>Github</span>
            </div>
          </div>

          <p className="text-white pt-4 text-center">
            <i className="fas fa-code"></i> Gimmecomments
            <br />
            2022 &#169; All Rights Reserved.
          </p>
        </Container>
      </footer>
    </>
  )
}

export default Footer
