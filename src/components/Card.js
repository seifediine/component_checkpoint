import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import FullName from './FullName';
import Address from './Address';
import Stats from './Stats';
import './Card.css'

function Card() {
  return (
    <div className='card'>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      <Stats/>
    </div>
  )
}

export default Card;