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
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
          dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci,
          finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta
          dictum nunc, sed pretium risus rutrum eget. Nam consequat, ligula in
          faucibus vestibulum, nisi justo laoreet risus, luctus luctus mi lacus
          sit amet libero. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Mauris pretium condimentum
          tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Donec placerat accumsan mi, ut congue neque placerat eu.
          Donec nec ipsum in velit pellentesque vehicula sit amet at augue.
          Maecenas aliquam bibendum congue. Pellentesque semper, lectus non
          ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis
          dui in sapien.
        </div>
      </div>
    </div>
  );
}
