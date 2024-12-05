import '../styles/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">AI or NOT</div>
      <div className="nav-links">
        <button>Home</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
