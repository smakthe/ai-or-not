import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">AI or NOT</Link>
        </div>
        <div className="nav-links">
          <Link to="/about" className="nav-button">About</Link>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
