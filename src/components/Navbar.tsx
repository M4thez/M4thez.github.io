import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#welcome">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
