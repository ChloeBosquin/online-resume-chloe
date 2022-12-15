import React from 'react';
import ProgressBar from './SkillsChart';

const testData = [
    { bgcolor: "#6a1b9a", completed: 100, skill: 'Wordpress' },
    { bgcolor: "#00695c", completed: 90, skill: 'Shopify' },
    { bgcolor: "#ef6c00", completed: 100 , skill: 'HTML5'},
    { bgcolor: "#ef6c00", completed: 100 , skill: 'CSS3 / Saas'},
    { bgcolor: "#ef6c00", completed: 90 , skill: 'PHP'},
    { bgcolor: "#ef6c00", completed: 70 , skill: 'JavaScript'},
    { bgcolor: "#ef6c00", completed: 50 , skill: 'React'},
  ];



const Experience = () => {
   

    return (
      <div id="experiences" className='container'>
        <div className="testomials__container container container--flex-column container--flex-center" >
            <h2>Hard and Soft Skills</h2>
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
                            <li>Strong Written and Oral Communication</li>
                            <li>Agile and Scrum methodology</li>
                            <li>Detailed-oriented and Problem-solving skills</li>
                            <li>Project Management: Task management, Prioritization, Scheduling, Risk management</li>
                            <li>Collaboration, Creativity, Enthusiasm</li>
                          </ul>
                    </div>
                    <div className="container__intro container__skills-set">
                          <div className='skills-set__title'>
                            <h4>Other Skills</h4>
                          </div>
                          <ul>
                            <li>Technical Skills: Git, Wireframing, Bootcamp, Tailwind, Responsive design, User experience, APIs</li>
                            <li>Graphical: Photoshop, Illustrator, InDesign, Acrobat, Figma, Invision</li>
                            <li>Marketing: SEO, SEM, SEA, CRM</li>
                            <li>Languages: English, French, Spanish </li>
                          </ul>
                    </div>
                  </div>
              </div>
        </div>
  </div>

          

    )
}

export default Experience; 