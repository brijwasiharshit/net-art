import React from 'react'; // Import React
import '../styles.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-box'>
        <img className='logo-img' src='images/logo.png' alt='Logo' /> {/* Added alt attribute for accessibility */}
      </div>
    </div>
  );
}

export default Header;
