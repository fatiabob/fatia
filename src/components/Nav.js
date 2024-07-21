import '../styles/App.scss';
import { NavLink, Link } from 'react-router-dom';
function Nav() {
  const imgFatia = require('../assets/fatia.jpeg');
  
  return (
    <div className="container-nav">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="head-nav">
          <img src={imgFatia} alt="fatia" className="img-laods" />
          <p className="title">Fatia Marwa</p>
          <p className="desc">Data Analyst</p>
          <p className="desc-new">
            Hi, I'm Fatia. Experienced Data Analyst with a demonstrated history{' '}
            of working in Telco Industry{' '}
            and Financial Technology. Currently, I am a Master of Science in{' '}
            Applied Data Science Candidate in University of Southern California.{' '}
            Prior to that, I graduated with a Bachelor's Degree in Statistics{' '}
            from University of Indonesia with Cum Laude Honor.
          </p>
        </div>
      </Link>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active">Portfolio</NavLink>
        <NavLink exact to="/contact" activeClassName="active">Find me on</NavLink>
        <a href="https://drive.google.com/file/d/1nVxjA8HENd4rpST9rlQvJJGoeTJ2duer/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default Nav;
