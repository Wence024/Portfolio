import React from 'react';
import Navbar from '../components/Navbar.js';
import '../styles/Projects.css';
import FavAlbum from '../images/A01-FavAlbum.png';
import Top3Movies from '../images/S01-Top3Movies.png';
import LoanAppForm from '../images/S02-LoanAppForm.png';

const Projects = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <div className="page">
        <div className="header">
          <h1>My Projects</h1>
        </div>
        <div className="container">
          <div className="card">
            <img src={FavAlbum} alt="Thumbnail" />
            <div className="card-body">
              <h3 className="card-title">My Favorite Albums</h3>
              <p className="card-description">This web project features my favorite albums consisting of a wide range of styles from the 2000s, OPM, experimental and Christian music.</p>
            </div>
          </div>
          <div className="card">
            <img src={Top3Movies} alt="Thumbnail" />
            <div className="card-body">
              <h3 className="card-title">My Top 3 Favorite Movies</h3>
              <p className="card-description">This web project features my favorite movies. Two aired from our family television, and one aired in SM Gensan.</p>
            </div>
          </div>
          <div className="card">
            <img src={LoanAppForm} alt="Thumbnail" />
            <div className="card-body">
              <h3 className="card-title">Loan Application Form</h3>
              <p className="card-description">This web project demonstrates the functionality of taking an application form from a bank in order to get a loan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
