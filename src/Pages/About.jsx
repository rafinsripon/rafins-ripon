import React from 'react';
import aboutImg from '../image/about1.png';
import aboutShape from '../image/about-shape.svg';
import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';
const About = () => {
  return (
    <>
      <section className='about_section'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="common_title mb-55">
                <div className="border_left"></div>
                <span>Experience About.</span>
                <h2>My About</h2>
              </div>
              <div className="about_img">
                <img src={aboutImg} alt="Img Not Found" />
                <img className='shape' src={aboutShape} alt="Img Not Found" />
              </div>
            </div>
            <div className="col-md-6 align-items-center">
              <div className="common_title mb-55">
                <div className="border_right"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laboriosam repudiandae magnam ab aperiam deserunt?</p>
              </div>
              <div className="about_right">
                <p className='who_am_i'>Who am i?</p>
                <h2>I'm Rafins Ripon, a Creative Web Designer and Web
                  Developer</h2>
                <p>I am a freelancer based in the Bangladesh and i have been building noteworthy Web Developer and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                <address className="about_info">
                  <div className="row">
                    <div className="col-md-6 single_info">
                      <span>Name: </span>
                      <p>Rafins Ripon</p>
                    </div>
                    <div className="col-md-6 single_info">
                      <span>Email: </span>
                      <p>rafinsripon@gmail.com</p>
                    </div>
                    <div className="col-md-6 single_info">
                      <span>Age: </span>
                      <p>22 years</p>
                    </div>
                    <div className="col-md-6 single_info">
                      <span>From: </span>
                      <p>Bangladesh, Dhaka</p>
                    </div>
                  </div>
                </address>
                <div className="button d-flex align-items-center">
                  <a href="#0" className='btn'>Download CV</a>
                  <ul className='about_social d-flex'>
                    <li><a href="0#">Facebook</a></li>
                    <li><a href="0#">Linkedin</a></li>
                    <li><a href="0#">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Testimonial />
    </>
  )
}



export default About;