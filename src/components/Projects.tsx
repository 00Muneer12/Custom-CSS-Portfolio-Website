import React from 'react'
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';


const data = [
    {
        id:0,
        title:'Real Estate',
        desc:'Real Estate Multi page Website which helps you to get in touch with market requirments in next Js.  ',
        img: '/P1.jpeg',
        tags: ['Next.js', 'Tailwind CSS', 'HTML', 'Typescript'],
    },
    {
        id:1,
        title:'Fashion Brand',
        desc:'At FASHION BRANDS, fashion is more than just clothing—it’s an expression of individuality, creativity, and confidence.',
        img: '/P2.jpeg',
        tags: ['Next.JS', 'Tailwind CSS','HTML','Typescript'],
    },
      {
        id:2,
        title:'Shareable Resume Builder',
        desc:'A Shareable Resume Builder build with HTML, CSS and Typescript.',
        img: '/P3.jpeg',
        tags: ['HTML', 'CSS', 'Typescript'],
      },
      {
        id:3,
        title:'Static Resume',
        desc:'A typescript-based interactive resume built with Html and CSS, allowing users to showcase their skills dynamically.',
        img: '/P4.jpeg',
        tags: ['HTML', 'CSS'],
    },
    {
      id:4,
      title:'CountDown Timer',
      desc:'A Typescript based application for managing and organizing your task effieiently.',
      img: '/P5.jpeg',
      tags: ['React', 'Typescript', 'Node', 'CSS'],
  },
  {
    id:5,
    title:'Hackathon Project',
    desc:'A Hackathon Project is a multi page responsive website assignment to polish programmer skills.',
    img: '/P6.jpeg',
    tags: ['Html', 'CSS', 'Typescript', 'node'],
},

];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (
        <Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />
        ))}
      </div>
      
    </div>
  );
};

export default Projects;