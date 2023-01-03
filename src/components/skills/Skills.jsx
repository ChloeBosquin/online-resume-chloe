import React from 'react';
import ProgressBar from './SkillsChart';

const testData = [
    { completed: 100, skill: 'Wordpress' },
    { completed: 90, skill: 'Shopify' },
    { completed: 100 , skill: 'HTML5'},
    { completed: 100 , skill: 'CSS3 / Saas'},
    { completed: 90 , skill: 'PHP'},
    { completed: 70 , skill: 'JavaScript'},
    { completed: 50 , skill: 'React'},
  ];



const Skills = () => {
   
    return (
        <div className="container container--flex-column container--flex-center main" >
          <h6>I have way more than just </h6>
            <h2>Web Development Skills</h2>
            <div className="container--flex-row container--flex container">
                  <div className="container--skills-chart container__columns-5">
                    {testData.map((item, idx) => (
                      <ProgressBar key={idx}  completed={item.completed} skill={item.skill} />
                    ))}
                  </div>
                  <div className="container__columns-7">
                    <div className="container__intro container__skills-set">
                          <div className='skills-set__title'>
                            <h4>Soft Skills </h4>
                          </div>
                          <ul>
                            <li>Strong written and oral communication</li>
                            <li>Agile and scrum methodology</li>
                            <li>Detailed-oriented and problem-solving skills</li>
                            <li>Project Management: task management, prioritization, scheduling, risk management</li>
                            <li>Collaboration, creativity, enthusiasm</li>
                          </ul>
                    </div>
                    <div className="container__intro container__skills-set">
                          <div className='skills-set__title'>
                            <h4>Other Skills</h4>
                          </div>
                          <ul>
                            <li>Technical skills: Git, wireframing, Bootcamp, Tailwind, responsive design, user experience, APIs</li>
                            <li>Graphical: Photoshop, Illustrator, InDesign, Acrobat, Figma, Invision</li>
                            <li>Marketing: SEO, SEM, SEA, CRM</li>
                            <li>Languages: English, French, Spanish </li>
                          </ul>
                    </div>
                  </div>
              </div>
        </div>         

    )
}

export default Skills; 