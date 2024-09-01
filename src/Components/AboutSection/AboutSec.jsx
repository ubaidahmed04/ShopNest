import React from 'react';
import './About.css';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import aboutUs from '../../Images/aboutPage.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component'

function About() {
  return (
    <div className="about-page">
      {/* Parallax Section for the aboutUs image */}
      <div className="parallax" style={{ backgroundImage: `url(${aboutUs})` }}>
        <div className="overlay">
          <h1 className="parallax-title">About Us</h1>
        </div>
      </div>

      <div className="content-section">
        <p>This section contains information about our company and the products we offer.</p>
      </div>

      <div className="parallax-section">
        <div className="parallax-item">
          <div className="parallax-image">
          <LazyLoadImage effect="blur" variant="top"  src={image1} />
            {/* <LazyLoadImage src={image1} alt="Mission 1" /> */}
          </div>
          <div className="parallax-text">
            <h2>Our Mission</h2>
            <p>Our mission is to provide high-quality products at affordable prices.</p>
          </div>
        </div>

        <div className="parallax-item">
          <div className="parallax-image">
          <LazyLoadImage effect="blur" variant="top"  src={image2} />
            {/* <img src={image2} alt="Mission 2" /> */}
          </div>
          <div className="parallax-text">
            <h2>Our Values</h2>
            <p>We value integrity, customer satisfaction, and innovation in everything we do.</p>
          </div>
        </div>

        <div className="parallax-item">
          <div className="parallax-image">
          <LazyLoadImage effect="blur" variant="top"  src={image3} />
            {/* <img src={image3} alt="Mission 3" /> */}
          </div>
          <div className="parallax-text">
            <h2>Our Vision</h2>
            <p>To be the leading eCommerce platform offering exceptional service and products.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
