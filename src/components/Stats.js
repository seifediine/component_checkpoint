import React from 'react';
import './Stats.css';

function Stats(){
  return (
    <div className='stats'>
      <hr></hr>
      <div className='numbers'>
        <div className='followers'>
          <h2>80K</h2>
          <p>Followers</p>
        </div>
        <div className='likes'>
          <h2>803K</h2>
          <p>Likes</p>
        </div>
        <div className='photos'>
          <h2>1.4K</h2>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;