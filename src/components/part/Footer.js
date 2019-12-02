import React from "react";

const Footer = () => {
  return (
    <>
      <div style={{background: 'black'}}>
      <div className="container" style={{borderTop: '1px solid #ffffff55'}}>
      </div>
      </div>
      <footer>
        <div className="container">
          <div className="row justify-content-between">
            <div className="left d-flex align-items-center">
              <span className="mr-3" style={{width: '20px', display: 'inline-block', lineHeight: 1, transform: 'translateY(-1px)'}}>
                <svg style={{width: '100%', height: 'auto'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 52 52" enableBackground="new 0 0 52 52" xmlSpace="preserve">
                  <path fill="#ffffff" d="M33.3,7.7C39.4,20,45.6,32.1,51.7,44.3c-17.1,0-34.2,0-51.4,0C6.4,32.1,12.6,20,18.7,7.7c2.4,4.8,4.8,9.6,7.3,14.4
                    C28.4,17.3,30.8,12.5,33.3,7.7z M5,41.4c0.1,0,0.2,0,0.3,0c3.6,0,7.1,0,10.7,0c0.3,0,0.4-0.2,0.6-0.4c2.6-5.1,5.1-10.2,7.7-15.3
                    c0.2-0.4,0.2-0.6,0-1c-1.7-3.4-3.4-6.8-5.2-10.2c-0.1-0.1-0.1-0.2-0.3-0.4C14.1,23.3,9.5,32.3,5,41.4z M33.3,14.1
                    c-0.1,0.1-0.1,0.2-0.2,0.3c-1.8,3.5-3.6,7.1-5.3,10.6c-0.1,0.2,0,0.6,0.1,0.8c2.5,5.1,5.1,10.2,7.6,15.2c0.2,0.3,0.3,0.4,0.7,0.4
                    c3.4,0,6.8,0,10.3,0c0.2,0,0.3,0,0.5,0C42.4,32.3,37.9,23.3,33.3,14.1z M19.5,41.4c4.4,0,8.7,0,13,0c-2.2-4.3-4.3-8.6-6.5-12.9
                    C23.8,32.9,21.7,37.1,19.5,41.4z"/>
                </svg>
              </span>
              <p className="mb-0 text-white"><strong>Madiantara Teja</strong> &copy; {new Date().getFullYear()}</p>
            </div>
            <div className="right mt-sm-2">
              <p className="mb-0 text-white text-center">Made with <span role="img" aria-label="coffee" style={{fontSize: '24px', marginLeft: '6px'}}>☕️</span> in <span role="img" aria-label="earth" style={{fontSize: '20px', marginLeft: '6px'}}>🌎</span></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
