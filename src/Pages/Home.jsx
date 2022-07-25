import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


const Home = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="row">
          <div className="home_title">
          <div className="underline left"></div>
            <p>WELCOME TO MY WORLD</p>
            <h1>Hi, I'm Rafins Ripon</h1>
            <span style={{ color: '#1ac01a', fontWeight: 'bold', fontSize: '40px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Developer', 'Designer', 'Contant creater']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
          </div>
        </div>
        <div className="Home_social">
          <div className="lang_text">
            <span>Eng</span>
            <span>Bang</span>
          </div>
          <div className="social_icon">
              <span>Linkedine</span>
              <span> Facebook </span>
              <span> Twiter </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;