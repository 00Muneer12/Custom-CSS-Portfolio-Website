import React from 'react';
import '../app/styles/heading.css';

interface propsType{
    title:string;
}

const Hero: React.FC<propsType> = ({title}) => {
  return (
    <div className='heading-container'>
        <p className='heading-title'>{title}</p>
    </div>
  )
}

export default Hero