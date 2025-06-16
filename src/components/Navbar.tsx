import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <div className="links-group">
          <li>
            <a href="#welcome">Home</a>
          </li>
        </div>
        <div className="links-group">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
