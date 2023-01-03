import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
          <div className="slick__dots--custom">
            <div className="loading" />
          </div>
        )
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="container--flex-row container--flex">
                <div className="container__intro container__columns-6">
                    <h3>Frontend Developer - Forge and Smith</h3>
                    <p>
                  Being a web developer @ Forge and Smith required a strong understanding of WordPress, including theme and plugin development, custom post types, custom fields, PHP, CSS, HTML, JavaScript and APIs.
                    </p>
                </div>
                <div className="testimonials__item container__columns-6">
                    <p className="testimonial">
                    Chloe has a strong understanding of web development technologies, [...] is able to write clean, efficient code that is well-structured and easy to maintain. 
                    She is also always willing to go the extra mile to ensure that the end product meets the customer's needs.
                    </p>
                    <p>Sean Stobo - Lead Developer</p>
                </div>
            </div>
            <div className="container--flex-row container--flex">
                <div className="container__intro container__columns-6">
                    <h3>Frontend Developer - Studio Colibri</h3>
                    <p>
                    Creating digitally sustainable websites using the Hugo static site framework, using energy-efficient servers, optimizing the website for fast loading times and incorporating features that reduce the website's carbon footprint.     
                    </p>
                </div>
                <div className="testimonials__item container__columns-6">
                    <p className="testimonial">[..] She’s a real perfectionist and [..]. I’d strongly recommend her to any agency looking for forward-thinking, dynamic and passionate people. Now you know she’s one of a kind, this is your chance! </p>
                    <p>Anthony Barbarich - CEO </p>
                </div>
            </div>
            <div className="container--flex-row container--flex">
                <div className="container__intro container__columns-6">
                    <h3>Marketing Manager - Efficy</h3>
                    <p>
                    In charge of developing and implementing marketing strategies: identifying target markets, 
                    developing marketing campaigns, 
                    and analyzing and tracking the effectiveness of marketing efforts. 
                    </p>
                </div>
                <div className="testimonials__item container__columns-6">
                    <p className="testimonial">
                    Chloé picks up and understands work immediately and is a great pair of hands to rely on.
                    Chloé is both digital and results minded. She is a reliable and trustworthy member of the team.
                    </p>
                    <p>Dominique Mangiatordi - Marketing Director</p>
                </div>
            </div>
            <div className="container--flex-row container--flex">
                <div className="container__intro container__columns-6">
                    <h3>Project Manager - Efficy</h3>
                    <p>
                    Defining the project scope, creating a project plan, setting and managing project budgets.
                      Communicate with team members, stakeholders, and CEO to keep them informed about the progress of the projects. 
                      </p>
                </div>
                <div className="testimonials__item container__columns-6">
                    <p className="testimonial">
                      Chloé's commitment for the company was always high.
                      She likes to work hard and gives 110% or more!
                      Working with her was really a pleasure!
                    </p>
                    <p>Cedric Pierrard - CEO</p>
                </div>
            </div>
          </Slider>
        </div>
      );
    }
  }



  
 
  