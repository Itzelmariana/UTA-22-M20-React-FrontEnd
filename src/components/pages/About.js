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
          I am currently seeking new opportunities in front-end development. I
          am open to work remotely and have flexible hours. I am highly skilled
          in JavaScript and React.
        </div>
      </div>
    </div>
  );
}
