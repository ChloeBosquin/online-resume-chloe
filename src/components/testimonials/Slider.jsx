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
                    <h3>Marketing Manager - Efficy</h3>
                    <p>Viverra varius diam risus urna quam vivamus. Tempor lorem neque.Viverra varius diam risus urna quam vivamus. Tempor lorem neque.</p>
                </div>
                <div className="testimonials__item container__columns-6">
                    <p className="testimonial">Viverra varius diam risus urna quam vivamus. Tempor lorem neque.Viverra varius diam risus urna quam vivamus. Tempor lorem neque.</p>
                    <p>Cedric Pierrard</p>
                </div>
            </div>
            <div className="container--flex-row container--flex">
                <div className="container__intro container__columns-6">
                    <h3>Marketing Manager - Efficy</h3>
                    <p>Viverra varius diam risus urna quam vivamus. Tempor lorem neque, orci eget tincidunt condimentum fringilla. Et convallis et magna enim nullam magna sit dictum iaculis. Malesuada potenti faucibus lacus placerat pulvinar augue tempus placerat bibendum. Blandit felis nunc porta enim lectus sem. Sed at habitant convallis facilisis viverra. Non volutpat, elementum nisi phasellus pharetra fusce. </p>
                </div>
                <div className="testimonials__item container__columns-6">
                    <p className="testimonial">Chloé's commitment for the company was always high. She likes to work hard and gives 110% or more! Working with her was really a pleasure! </p>
                    <p>Cedric Pierrard</p>
                </div>
            </div>
            <div className="container--flex-row container--flex">
                <div className="container__intro container__columns-6">
                    <h3>Marketing Manager - Efficy</h3>
                    <p>Viverra varius diam risus urna quam vivamus. Tempor lorem neque, orci eget tincidunt condimentum fringilla. Et convallis et magna enim nullam magna sit dictum iaculis. Malesuada potenti faucibus lacus placerat pulvinar augue tempus placerat bibendum. Blandit felis nunc porta enim lectus sem. Sed at habitant convallis facilisis viverra. Non volutpat, elementum nisi phasellus pharetra fusce. </p>
                </div>
                <div className="testimonials__item container__columns-6">
                    <p className="testimonial">Viverra varius diam risus urna quam vivamus. Tempor lorem neque. </p>
                    <p>Cedric Pierrard</p>
                </div>
            </div>
            <div className="container--flex-row container--flex">
                <div className="container__intro container__columns-6">
                    <h3>Marketing Manager - Efficy</h3>
                    <p>Viverra varius diam risus urna quam vivamus. Tempor lorem neque, orci eget tincidunt condimentum fringilla. Et convallis et magna enim nullam magna sit dictum iaculis. Malesuada potenti faucibus lacus placerat pulvinar augue tempus placerat bibendum. Blandit felis nunc porta enim lectus sem. Sed at habitant convallis facilisis viverra. Non volutpat, elementum nisi phasellus pharetra fusce. </p>
                </div>
                <div className="testimonials__item">
                    <p className="testimonial">I worked at Efficy as a Marketing Manager </p>
                    <p>Cedric Pierrard</p>
                </div>
            </div>
          </Slider>
        </div>
      );
    }
  }



  
 
  