import React from 'react';

import './Resume.css';

export default function Resume() {
  return (
    <div className='Resume container mb-4 mt-5'>
      <h1>Resume</h1>

      <p>
        Downloaded my{' '}
        <a
          href='https://drive.google.com/file/d/1n6tznTvi1JmKNATBUhwbVxHmE52L3pG0/view?usp=sharing'
          target='blank'
        >
          Resume
        </a>
      </p>
      <h4>Front-End Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JQuery</li>
        <li>Responsive design</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <h4>Back-End Proficiencies</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
