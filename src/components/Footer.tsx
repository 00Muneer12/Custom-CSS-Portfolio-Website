import React from 'react';
import '../app/styles/footer.css'
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='footer'>
      <Image src='/Ghulam Muneer Uddin .png' alt='logo' width={50} height={50}/>

         All rights reserved 2024.
    </div>
  );
};

export default Footer