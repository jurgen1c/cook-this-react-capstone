import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="flex">
      <img src="/images/logo.jpg" alt="Logo" />
      <h2>Cook this!</h2>
    </div>
    <Link to="/" className="nav-link">Home</Link>
  </div>
);

export default Navbar;
