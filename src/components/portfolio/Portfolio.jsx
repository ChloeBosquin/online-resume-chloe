import React from 'react';
import { motion} from "framer-motion";
import Bellrock from '../../assets/Bellrock.jpg';
import healthEssentialsPic from '../../assets/healthEssentials.webp';
import {BsArrowUpRightCircleFill} from "react-icons/bs";
import HerstasisBg from '../../assets/herstasis-bg.webp'; 
import bodyCare from '../../assets/body-care-scaled.jpg'; 
import climber from '../../assets/climber.jpg'; 

const Portfolio = () => {



    return (
        <div id="portfolio" className="container">
             <div className="container container--flex-column" >
                <h2>Latest Projects</h2>
                <div className="container container--grid" >
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <h4>Health Essentials *</h4>
                                <p className='capitalized'>Shopify</p>
                            </div>
                            <div>
                                <a href="https://myhealthessentials.ca/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={bodyCare} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <h4>Bellrock *</h4>
                                <p className='capitalized'>Wordpress - PHP - Google Maps API - Custom Post Filter</p>
                            </div>
                            <div>
                                <a href="https://bellrock.ca/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={climber} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <h4>Brands For Better *</h4>
                                <p className='capitalized'>Wordpress - PHP - JS</p>
                            </div>
                            <div>
                                <a href="https://www.brandsforbetter.ca/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={healthEssentialsPic} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <h4>Bellrock *</h4>
                                <p className='capitalized'>Wordpress - PHP - JS</p>
                            </div>
                            <div>
                                <a href="https://bellrock.ca/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={Bellrock} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <h4>Herstasis *</h4>
                                <p className='capitalized'>Wordpress - PHP - JS</p>
                            </div>
                            <div>
                                <a href="https://www.herstasis.com/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>    
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={HerstasisBg} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                </div> 
                <p>* In charge of the site builds. Design and content of those sites are the work of the web agency. </p>
            </div> 
        </div>
    )
}

export default Portfolio; 

