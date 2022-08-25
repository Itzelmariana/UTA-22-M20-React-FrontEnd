import React from 'react';

import './Portfolio.css';

export default function portfolio() {
  return (
    <div className='Portfolio container mb-4 mt-5'>
      <h1>Portfolio</h1>

      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <a href='/'>
            <span>weatherApp</span>
            <img
              src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/044/475/original/weather.png?1661388395'
              alt='weatherApp'
            />
          </a>
        </div>
        <div className='col-lg-4 col-md-6'>
          <img
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/044/475/original/weather.png?1661388395'
            alt='weatherApp'
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <img
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/044/475/original/weather.png?1661388395'
            alt='weatherApp'
          />
        </div>
      </div>
    </div>
  );
}
