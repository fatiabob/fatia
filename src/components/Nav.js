import '../styles/App.scss';
import { NavLink, Link } from 'react-router-dom';
function Nav() {
  const imgFatia = require('../assets/fatia.jpeg');
  
  return (
    <div className="container-nav">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="head-nav">
          <img src={imgFatia} alt="fatia" className="img-laods" />
          <p className="title">Fatia Marwa Nastitie</p>
          <p className="desc">Data Analyst</p>
          <p className="desc-new">
            Hi, I’m Fatia. Experienced Data Analyst with 2.5 years of expertise in building ML models and frameworks 
            within the Telco industry, and an additional year in the E-Commerce sector. 
            Currently, I am pursuing an MS in Applied Data Science at the University of Southern California, 
            Viterbi School of Engineering. I hold a Bachelor’s Degree in Statistics from the University of Indonesia, 
            graduating with Cum Laude honors.
          </p>
        </div>
      </Link>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">Portfolio</NavLink>
        <NavLink exact to="/contact" activeClassName="active">Find me on</NavLink>
        <a href="https://drive.google.com/file/d/1WLEDtqdF7CCGPmJCkZPdA5SZqf5t0XR4/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default Nav;
