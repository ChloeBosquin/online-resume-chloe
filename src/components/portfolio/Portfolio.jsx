import React from 'react';
import { motion} from "framer-motion";
import Bellrock from '../../assets/Bellrock.jpg';
import healthEssentialsPic from '../../assets/healthEssentials.webp';
import {BsArrowUpRightCircleFill} from "react-icons/bs";
import HerstasisBg from '../../assets/herstasis-bg.webp'; 
import bodyCare from '../../assets/body-care-scaled.jpg'; 
import climber from '../../assets/climber.jpg'; 
import food from '../../assets/food.webp'; 
import weatherAPIPic from '../../assets/weather.jpg'; 
import mitacs from '../../assets/mitacs.jpg'
const Portfolio = () => {



    return (
             <div className="container container--flex-column" >
                <h2>Latest Projects</h2>
                <div className="container container--grid" >
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <a href="https://portfoliochloebosquin.000webhostapp.com/health-essentials/" target="_blank" className="website__link">
                                    <h4>Health Essentials *</h4>   
                                    <p>Custom Shopify</p>
                                </a> 
                            </div>
                            <div>
                                <a href="https://portfoliochloebosquin.000webhostapp.com/health-essentials/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={bodyCare} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <a href="https://portfoliochloebosquin.000webhostapp.com/bellrock/" target="_blank" className="website__link"> 
                                    <h4>Bellrock *</h4>
                                    <p>Custom WordPress</p>
                                </a>  
                            </div>
                            <div>
                                <a href="https://portfoliochloebosquin.000webhostapp.com/bellrock/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={climber} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <a href="https://portfoliochloebosquin.000webhostapp.com/weatherapi/" target="_blank" className="website__link">
                                    <h4>Weather API</h4>    
                                    <p>OpenWeather REST API</p>
                                </a> 
                            </div>
                            <div>
                                <a href="https://portfoliochloebosquin.000webhostapp.com/weatherapi/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={weatherAPIPic} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <a href="https://www.brandsforbetter.ca/events/" target="_blank" className="website__link">
                                        <h4>Brands For Better *</h4>
                                        <p>Custom Wordpress - Events Plugin</p>
                                </a>  
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
                                <a href="https://shop.abetterlifefoundation.ca/" target="_blank" className="website__link"> 
                                    <h4>A Better Life Foundation *</h4>        
                                    <p>Custom Shopify and Custom Wordpress</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://shop.abetterlifefoundation.ca/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={food} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <a href="https://www.herstasis.com/" target="_blank" className="website__link"> 
                                    <h4>Herstasis *</h4>
                                    <p>Wordpress - PHP - JS</p>
                                </a> 
                            </div>
                            <div>
                                <a href="https://www.herstasis.com/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>    
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={HerstasisBg} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                    <motion.div className="grid__item" whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                        <div className='grid__item__header container--flex-row container--flex-space-between'>
                            <div>
                                <a href="https://mitacsdev.wpengine.com/" target="_blank" className="website__link"> 
                                    <h4>Mitacs *</h4>        
                                    <p>Custom Wordpress - Jquery - ACF Plugin - JavaScript</p>
                                </a>
                            </div>
                            <div>
                                <a href="https://mitacsdev.wpengine.com/" target="_blank" className="website__link"><BsArrowUpRightCircleFill/></a>  
                            </div>
                        </div>
                        <div className='image-container'>
                            <img src={mitacs} alt="shopify-image-site" />
                        </div>
                    </motion.div>
                </div> 
                <p className='copyright'>* I oversaw the site builds while the web agency was responsible for designing and creating the content of the sites </p>
            </div> 
    )
}

export default Portfolio; 

