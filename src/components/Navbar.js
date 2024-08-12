import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Home.css';

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="container">
        <h2 className="logo"><span>Port</span>folio</h2>
        <div>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;