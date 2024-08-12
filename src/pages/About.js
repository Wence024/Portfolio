// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar.js';
import MyProfilePic from '../images/MyProfilePic.jpg';
import '../styles/About.css';

const About = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div class="about-container">
        <div class="image-section">
          <img src={MyProfilePic} alt="My Profile" class="profile-image"/>
        </div>
      <div class="text-section">
        <h1 class="title">About Me</h1>
          <h2 class="section-title">My Background</h2>
          <p class="paragraph">
            I am Emmanuel Wence C. Fernandez, a 20-year-old college student studying Information Technology (BSIT) in Notre Dame of Kidapawan College. I live in the peaceful suburban areas of Kidapawan City together with my parents. My mother is Hailyn C. Fernandez and my Father Lito S. Fernandez, and both of them came from a poor family of about 12 children and overcame poverty to have our currently good life.
          </p>
          <h2 class="section-title">My Skills</h2>
          <p class="paragraph">
            I was exposed to C++, python and Java, though I will have to review them for a little while if I need to use them again. I can simulate differing Operating Systems in Windows computers using VirtualBox and the necessary OS image files. I can also configure and connect home routers, switches and host devices.
          </p>
          <p class="paragraph">
            I haven't done any big coding projects yet nor any work experiences, but there are some good coding assignments I complied to my college professor. I made a Python program involving encrypted communication between two computers, a Python program of an address book database, and a basic Java program of a Pizza Ordering System.
          </p>
          <p class="paragraph">
            While I encountered challenges such as time management and assertiveness, these have provided valuable lessons for me. I plan on working on these challenges so that I can enhance my productivity and collaborate better with my team members. I plan to gain more practical hands-on experience and work through internships in the near future.
          </p>
          <h2 class="section-title">My Interests</h2>
          <p class="paragraph">
            I'm currently interested in self-improvement content by reading books watching YouTube videos about them. Some are The Anatomy of Loneliness by Teal Swan, and Existential Kink by Carolyn Elliott. I sometimes play the piano when I’m in the mood. Other times I seek content for music production content, intellectual topics about beliefs and discussions by Jordan Peterson. I also like hearing about both sides of any issue whether local or in a foreign country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
