import React from 'react';

import './Navbar.css';

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className='Navbar'>
      <div className='nav  row myContainer'>
        <div className='col-3 myName'>
          <h2>Itzel Cole</h2>
        </div>
        <div className='col-9'>
          <div className='row myNavTab'>
            <div className='nav-item col-3'>
              <a
                href='#about'
                onClick={() => handlePageChange('About')}
                className={
                  currentPage === 'About' ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </a>
            </div>
            <div className='nav-item col-3'>
              <a
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={
                  currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
                }
              >
                Portfolio
              </a>
            </div>
            <div className='nav-item col-3'>
              <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={
                  currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </a>
            </div>
            <div className='nav-item col-3'>
              <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={
                  currentPage === 'Resume' ? 'nav-link active' : 'nav-link'
                }
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
