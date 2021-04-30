import React from 'react';
import profile from './profile.jpg';
import './ProfilePhoto.css';

function ProfilePhoto() {
  return (
    <div className='img-container'>
      <img src={profile} alt='Profile' className='profile-img'></img>
    </div>
  );
}

export default ProfilePhoto;