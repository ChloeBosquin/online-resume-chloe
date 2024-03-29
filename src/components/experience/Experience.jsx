import React from 'react';
import { Chrono } from "react-chrono";
import MediaQuery from 'react-responsive';
import graduate from '../../assets/graduate-cap.png'; 
import briefcase from '../../assets/briefcase.png'; 

const Experience = () => {

    return (
        <div className="container container--flex-column container__columns-8">
            <MediaQuery maxWidth={767}>
            <Chrono items={[
                    {
                        title: "2020 - 2022"
                    },
                    // {
                    //     title: "2019 - 2021",
                    // },
                    {
                        title: "2019 - 2020",
                    }, 
                    {
                        title: "2019 - 2019",
                    },
                    {
                        title: "2016 - 2019",
                    }, 
                    {
                        title: "2015 - 2016",
                    }, 
                    {
                        title: "2013 - 2015",
                    }, 
                    // {
                    //     title: "2010 - 2013",
                    // }, 
                        
                    ]}

                    theme={{
                        primary: '#484963',
                        secondary: 'transparent',
                        cardBgColor: 'white',
                        cardForeColor: 'violet',
                        titleColor: '#484963',
                        titleColorActive: '#484963',
                    }}
                    mode='VERTICAL'
                    slideShow
                    >
                    <div className="chrono-icons">
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    {/* <img
                        src={briefcase}
                        alt="work"
                    /> */}
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    <img
                        src={graduate}
                        alt="education"
                    />
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    <img
                        src={graduate}
                        alt="education"
                    />
                    <img
                    src={graduate}
                        alt="education"
                    />
                    {/* <img
                        src={graduate}
                        alt="education"
                    /> */}
                    </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Forge and Smith - Canada</h5>
                                <h3>Web Developer</h3>
                                <h6>Wordpress - Shopify - PHP - JavaSscript - CSS3/SASS - HTML5 -API</h6>
                            </div>
                            <ul>
                                <li>Building of custom Wordpress websites using SASS best practices, modern JavaScript and PHP</li>
                                <li>Usage of the in-house Wordpress framework, APIs and ACF fields to deliver plug and play websites</li>
                            </ul>
                        </div>
                        {/* <div className='timeline__block'>
                            <div>
                                <h5>Home Instead - Canada</h5>
                                <h3>Project and Marketing Manager</h3>
                                <h6>Project Management - Marketing </h6>
                            </div>
                            <ul>
                                <li>Launch and manage Google Ads and landing pages tailored to specific 
                                    geographical segment of potential customer base. 
                                    Track results and ROI of each campaign and adjust marketing strategies accordingly.</li>
                                <li>Analyse, correct and improve HR procedure inefficiencies
                                to streamline onboarding process resulting in increased
                                automation and optimized time management (50%)</li> 
                            </ul>
                        </div> */}
                        <div className='timeline__block'>
                            <div>
                                <h5>Studio Colibri - Belgium</h5>
                                <h3>Front-End Developer</h3>
                                <h6>Hugo - JavaScript - CSS3/SASS - HTML5</h6>
                            </div>
                            <ul>
                                <li>Building of eco-friendly websites by optimizing speed, code and general plateform performances with modern JavaScript and CSS</li>
                                <li>Usage of modern CSS practices to enhance UX, responsiveness and design of platforms</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Evoliris Institute - Belgium</h5>
                                <h3>Full-Stack Developer Training</h3>
                                <h6>Computer Programming</h6>
                            </div>
                            <ul>
                                <li>HTML5, CSS3, JavaScript, Angular, MySQL, PHP, Node JS</li>
                                <li>Introduction and use of "Agile" methodology</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Efficy CRM - Belgium</h5>
                                <h3>Marketing Manager</h3>
                                <h6>SEM - SEO - SEA - CRM - Project Management</h6>
                            </div>
                            <ul>
                                <li>Define and follow up on annual regional marketing plan (200 K), contribute to global annual marketing plan and budget (600 K)</li>
                                <li>Management of operational marketing actions : SEO optimisation, SEA campaingns, newsletter creation, social media and event management</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>HEC - Belgium</h5>
                                <h3>Business Master of Entrepreneurship</h3>
                                <h6>Business Master's Degree</h6>
                            </div>
                            <ul>
                                <li>Post-master in Business Studies, specialization in entrepreneurship covering marketing management, growth strategy, merge and buy out management, business model and business plan</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>University of Brussels - Belgium</h5>
                                <h3>Master in Multicultural Communication</h3>
                                <h6>Communication Master's Degree</h6>
                            </div>
                            <ul>
                                <li>Master in communication, specialization in International Relations. Foreign languages, communication, linguistic and international relations courses.</li>
                            </ul>
                        </div>
                        {/* <div className='timeline__block'>
                            <div>
                                <h5>University of Liege - Belgium</h5>
                                <h3>Bachelor of Modern Languages, English and Spanish</h3>
                                <h6>Litterature Bachelor's Degree</h6>
                            </div>
                            <ul>
                                <li>Learning of the English and Spanish language, linguistic and culture.</li>
                            </ul>
                        </div> */}
                </Chrono>
            </MediaQuery>
            <MediaQuery  minWidth={767} maxWidth={1199}>
            <Chrono items={[
                    {
                        title: "2020 - 2022"
                    },
                    // {
                    //     title: "2019 - 2021",
                    // },
                    {
                        title: "2019 - 2020",
                    }, 
                    {
                        title: "2019 - 2019",
                    },
                    {
                        title: "2016 - 2019",
                    }, 
                    {
                        title: "2015 - 2016",
                    }, 
                    {
                        title: "2013 - 2015",
                    }, 
                    // {
                    //     title: "2010 - 2013",
                    // }, 
                        
                    ]}

                    theme={{
                        primary: '#484963',
                        secondary: 'transparent',
                        cardBgColor: 'white',
                        cardForeColor: 'violet',
                        titleColor: '#484963',
                        titleColorActive: '#484963',
                    }}
                    mode='VERTICAL'
                    slideShow
                    >
                    <div className="chrono-icons">
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    {/* <img
                        src={briefcase}
                        alt="work"
                    /> */}
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    <img
                        src={graduate}
                        alt="education"
                    />
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    <img
                        src={graduate}
                        alt="education"
                    />
                    <img
                    src={graduate}
                        alt="education"
                    />
                    {/* <img
                        src={graduate}
                        alt="education"
                    /> */}
                    </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Forge and Smith - Canada</h5>
                                <h3>Web Developer</h3>
                                <h6>Wordpress - Shopify - PHP - JavaSscript - CSS3/SASS - HTML5 -API</h6>
                            </div>
                            <ul>
                                <li>Building of custom Wordpress websites using SASS best practices, modern JavaScript and PHP</li>
                                <li>Usage of the in-house Wordpress framework, APIs and ACF fields to deliver plug and play websites</li>
                            </ul>
                        </div>
                        {/* <div className='timeline__block'>
                            <div>
                                <h5>Home Instead - Canada</h5>
                                <h3>Project and Marketing Manager</h3>
                                <h6>Project Management - Marketing </h6>
                            </div>
                            <ul>
                                <li>Launch and manage Google Ads and landing pages tailored to specific 
                                    geographical segment of potential customer base. 
                                    Track results and ROI of each campaign and adjust marketing strategies accordingly.</li>
                                <li>Analyse, correct and improve HR procedure inefficiencies
                                to streamline onboarding process resulting in increased
                                automation and optimized time management (50%)</li>  
                            </ul>
                        </div> */}
                        <div className='timeline__block'>
                            <div>
                                <h5>Studio Colibri - Belgium</h5>
                                <h3>Front-End Developer</h3>
                                <h6>Hugo - JavaScript - CSS3/SASS - HTML5</h6>
                            </div>
                            <ul>
                                <li>Building of eco-friendly websites by optimizing speed, code and general plateform performances with modern JavaScript and CSS</li>
                                <li>Usage of modern CSS practices to enhance UX, responsiveness and design of platforms</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Evoliris Institute - Belgium</h5>
                                <h3>Full-Stack Developer Training</h3>
                                <h6>Computer Programming</h6>
                            </div>
                            <ul>
                                <li>HTML5, CSS3, JavaScript, Angular, MySQL, PHP, Node JS</li>
                                <li>Introduction and use of "Agile" methodology</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Efficy CRM - Belgium</h5>
                                <h3>Marketing Manager</h3>
                                <h6>SEM - SEO - SEA - CRM - Project Management</h6>
                            </div>
                            <ul>
                                <li>Define and follow up on annual regional marketing plan (200 K), contribute to global annual marketing plan and budget (600 K)</li>
                                <li>Management of operational marketing actions : SEO optimisation, SEA campaingns, newsletter creation, social media and event management</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>HEC - Belgium</h5>
                                <h3>Business Master of Entrepreneurship</h3>
                                <h6>Business Master's Degree</h6>
                            </div>
                            <ul>
                                <li>Post-master in Business Studies, specialization in entrepreneurship covering marketing management, growth strategy, merge and buy out management, business model and business plan</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>University of Brussels - Belgium</h5>
                                <h3>Master in Multicultural Communication</h3>
                                <h6>Communication Master's Degree</h6>
                            </div>
                            <ul>
                                <li>Master in communication, specialization in International Relations. Foreign languages, communication, linguistic and international relations courses.</li>
                            </ul>
                        </div>
                        {/* <div className='timeline__block'>
                            <div>
                                <h5>University of Liege - Belgium</h5>
                                <h3>Bachelor of Modern Languages, English and Spanish</h3>
                                <h6>Litterature Bachelor's Degree</h6>
                            </div>
                            <ul>
                                <li>Learning of the English and Spanish language, linguistic and culture.</li>
                            </ul>
                        </div> */}
                </Chrono>
            </MediaQuery>
            <MediaQuery minWidth={1199}>
                <Chrono items={[
                    {
                        title: "2020 - 2022"
                    },
                    // {
                    //     title: "2019 - 2021",
                    // },
                    {
                        title: "2019 - 2020",
                    }, 
                    {
                        title: "2019 - 2019",
                    },
                    {
                        title: "2016 - 2019",
                    }, 
                    {
                        title: "2015 - 2016",
                    }, 
                    {
                        title: "2013 - 2015",
                    }, 
                    // {
                    //     title: "2010 - 2013",
                    // }, 
                        
                    ]}

                    theme={{
                        primary: '#484963',
                        secondary: 'transparent',
                        cardBgColor: 'white',
                        cardForeColor: 'violet',
                        titleColor: '#484963',
                        titleColorActive: '#484963',
                    }}
                    mode='VERTICAL_ALTERNATING'
                    slideShow
                    >
                    <div className="chrono-icons">
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    {/* <img
                        src={briefcase}
                        alt="work"
                    /> */}
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    <img
                        src={graduate}
                        alt="education"
                    />
                    <img
                        src={briefcase}
                        alt="work"
                    />
                    <img
                        src={graduate}
                        alt="education"
                    />
                    <img
                    src={graduate}
                        alt="education"
                    />
                    {/* <img
                        src={graduate}
                        alt="education"
                    />  */}
                    </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Forge and Smith - Canada</h5>
                                <h3>Web Developer</h3>
                                <h6>Wordpress - Shopify - PHP - JavaSscript - CSS3/SASS - HTML5 -API</h6>
                            </div>
                            <ul>
                                <li>Building of custom Wordpress websites using SASS best practices, modern JavaScript and PHP</li>
                                <li>Usage of the in-house Wordpress framework, APIs and ACF fields to deliver plug and play websites</li>
                            </ul>
                        </div>
                        {/* <div className='timeline__block'>
                            <div>
                                <h5>Home Instead - Canada</h5>
                                <h3>Project and Marketing Manager</h3>
                                <h6>Project Management - Marketing </h6>
                            </div>
                            <ul>
                                <li>Launch and manage Google Ads and landing pages tailored to specific 
                                    geographical segment of potential customer base. 
                                    Track results and ROI of each campaign and adjust marketing strategies accordingly.</li>
                                <li>Analyse, correct and improve HR procedure inefficiencies
                                to streamline onboarding process resulting in increased
                                automation and optimized time management (50%)</li> 
                            </ul>
                        </div> */}
                        <div className='timeline__block'>
                            <div>
                                <h5>Studio Colibri - Belgium</h5>
                                <h3>Front-End Developer</h3>
                                <h6>Hugo - JavaScript - CSS3/SASS - HTML5</h6>
                            </div>
                            <ul>
                                <li>Building of eco-friendly websites by optimizing speed, code and general plateform performances with modern JavaScript and CSS</li>
                                <li>Usage of modern CSS practices to enhance UX, responsiveness and design of platforms</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Evoliris Institute - Belgium</h5>
                                <h3>Full-Stack Developer Training</h3>
                                <h6>Computer Programming</h6>
                            </div>
                            <ul>
                                <li>HTML5, CSS3, JavaScript, Angular, MySQL, PHP, Node JS</li>
                                <li>Introduction and use of "Agile" methodology</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>Efficy CRM - Belgium</h5>
                                <h3>Marketing Manager</h3>
                                <h6>SEM - SEO - SEA - CRM - Project Management</h6>
                            </div>
                            <ul>
                                <li>Define and follow up on annual regional marketing plan (200 K), contribute to global annual marketing plan and budget (600 K)</li>
                                <li>Management of operational marketing actions : SEO optimisation, SEA campaingns, newsletter creation, social media and event management</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>HEC - Belgium</h5>
                                <h3>Business Master of Entrepreneurship</h3>
                                <h6>Business Master's Degree</h6>
                            </div>
                            <ul>
                                <li>Post-master in Business Studies, specialization in entrepreneurship covering marketing management, growth strategy, merge and buy out management, business model and business plan</li>
                            </ul>
                        </div>
                        <div className='timeline__block'>
                            <div>
                                <h5>University of Brussels - Belgium</h5>
                                <h3>Master in Multicultural Communication</h3>
                                <h6>Communication Master's Degree</h6>
                            </div>
                            <ul>
                                <li>Master in communication, specialization in International Relations. Foreign languages, communication, linguistic and international relations courses.</li>
                            </ul>
                        </div>
                        {/* <div className='timeline__block'>
                            <div>
                                <h5>University of Liege - Belgium</h5>
                                <h3>Bachelor of Modern Languages, English and Spanish</h3>
                                <h6>Litterature Bachelor's Degree</h6>
                            </div>
                            <ul>
                                <li>Learning of the English and Spanish language, linguistic and culture.</li>
                            </ul>
                        </div> */}
                </Chrono>
            </MediaQuery>
        </div>

)
}

export default Experience; 