import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <div className="links-group">
          <li>
            <a href="#welcome">M4thez</a>
          </li>
        </div>
        <div className="links-group">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
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
