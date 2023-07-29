import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="mt-5" style={{ background: '#775da8' }}>
        <div
          fluid="xxl"
          className="container p-5 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="wrapper">
            {/* <div className="button-social" onClick={() => window.open("https://www.instagram.com/vishesh22_17/")}>
                            <div className="icon">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <span>Instagram</span>
                        </div>

                        <div className="button-social" onClick={() => window.open("https://www.linkedin.com/in/vishesh-vgr/")}>
                            <div className="icon">
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <span>Linkedin</span>
                        </div> */}

            <div
              className="button-social"
              onClick={() =>
                window.open(
                  'https://github.com/Proj-Beluga/gimme-comments-admin'
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
            <i className="fas fa-code"></i> Gimme Comments Admin
            <br />
            2023 &#169; All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
