import React from 'react';
import '../styles.css'
import BodyUpper from './BodyUpper';
import BodyLower from './BodyLower';
import BodyBottom from './BodyBottom';
const Body = () => {
  return (
    <div className='body'>
     <BodyUpper />
      <BodyLower />
   <BodyBottom />
      
    </div>
  )
}

export default Body;
