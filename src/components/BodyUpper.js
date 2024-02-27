import React from 'react';
import '../styles.css';

const BodyUpper = () => {
  return (
    <div className='body-upper-div'>
      <img src="images/1.png" alt='image' className='upper-img'  />
      <div className='body-upper-div-txt' >
        <h5>C.R.I PUMPS WITH THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
        <div className='body-upper-right'>
          <ul>
            <li className='small-text'>C.R.I's energy efficient products are well recognized by various Government institutions, as trustworthy products for various projects across the globe to save energy</li>
            <li className='small-text'>C.R.I is the highest contributor in the energy for the projects of EESL(Enery Efficiency Services Ltd.) to replace the old inefficient pumps with 5 star rated energy efficient smart pumps wiht IoT enabled control panel</li>
          </ul>
          <img className='people-img' src='images/2.png' alt='image' />
          <p className='small-text'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.L. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
    </div>
  );
}

export default BodyUpper;
