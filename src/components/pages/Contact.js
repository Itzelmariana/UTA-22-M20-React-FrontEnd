import React from 'react';

import './Contact.css';

export default function Contact() {
  return (
    <div className='Contact'>
      <div className='content-container container'>
        <div className='content'>
          <h1 className='mb-4 mt-5'>Contact me </h1>
          <div className='row'>
            <div className='col-md-8'>
              <form
                action='https://formspree.io/f/mbjblyzq'
                method='POST'
                className='border p-3 rounded mb-3'
              >
                <div className='mb-3'>
                  <label className='form-label'> Name: </label>
                  <input type='name' className='form-control' required />
                </div>
                <div className='mb-3'>
                  <label className='form-label'> Email: </label>
                  <input
                    type='email'
                    name='_replyto'
                    className='form-control'
                    required
                  />
                </div>
                <div className='mb-3'>
                  <label className='form-label'> Message: </label>
                  <textarea
                    name='message'
                    className='form-control'
                    required
                  ></textarea>
                </div>

                <button type='submit' className='btn myBtn'>
                  Send
                </button>
              </form>
            </div>
            <div className='col-md-4'>
              <h3>Email</h3>
              <p>
                <a href='mailto:it.cole@hotmail.com'> it.cole@hotmail.com </a>
              </p>
              <h3>Twitter</h3>
              <p>
                <a href='https://www.twitter.com/Itzelmariana' target='blank'>
                  @Itzelmariana
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
