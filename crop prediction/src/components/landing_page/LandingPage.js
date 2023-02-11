import React from "react";
import './LandingPage.css'
import logo from '../../assets/Icon.png'
import illustration from '../../assets/illustration.png'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="website-info">
          <img src={logo} className='logo'></img>
          <h1 className="title"><span className="title-crop">Crop</span>Predictor</h1>
        </div>
        <div className="actions">
          <Link to='/crop-predictor'><button className="signup-button">Continue</button></Link>
        </div>
      </header>
      <div className="illustration-section">
        <div className="quote-section">
          <p className="quote">"The greatest wealth is health. And the best investment for a healthy future is investing in <span className="sustainable-agriculture">sustainable agriculture</span>"</p>
        </div>
        <div className="illustration-container">
        <img src={illustration} className='illustration'></img>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
