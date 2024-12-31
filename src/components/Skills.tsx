import React from 'react';
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div  id='skills' className='skills-container'>
        <div className='skills-grid'>
            {/* First column: Heading and Paragraph */}
            <div data-aos="zoom-in-up" className='skills-left'>
                <h2 className='skills-heading'> Skills Set </h2>
                <p className='skills-para'>
                From crafting sleek interfaces to solving complex problems, my expertise bridges creativity and technology.
                </p>
            </div>
            {/* Second Column: Skills */}
            <div className='skills-right'>
                <div className='skills-icons-grid'>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">HTML</h2>
                    </div>

                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                        <h2 data-aos="zoom-in-up">Custom CSS</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Skills;