import React from 'react';

import './About.css';

export default function About() {
  return (
    <div className='About container mb-4 mt-5'>
      <h1>About me</h1>
      <div className='row'>
        <div className='d-none col-md-3 d-md-block '>
          <img
            src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/044/472/original/Itzel_picture.jpg?1661387051'
            alt='itzel cole'
          />
        </div>
        <div className='col-md-9 col-sm-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
}
