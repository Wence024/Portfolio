import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import MyProfilePic from '../images/MyProfilePic.jpg'
import { FaFacebook, FaYoutube} from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      
      <section class="home">
        <div class="two-columns">
          <div class="image">
            <img src={MyProfilePic} alt="My Profile"/>
          </div>
          <div class="content">
            <h2><span>Fixing problems </span> in the world through <br/> designing <span>good websites</span></h2>
            
            <p>Emmanuel Wence C. Fernandez.</p>
            <p>A Web Developer.</p>
            <div class="btn-group">
                <a href="./about">About me</a>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/C.ewence08.fernandez/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@emmanuelwencefernandez9963" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
};

export default Home;
