import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="./logo-personal.jpg" alt="" />
        Damian Zsiros
      </Link>
      <div class="respmenu">
        <input type="checkbox" />
        <i class="fa fa-bars"></i>
        <i class="fa fa-times"></i>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre-mi">Sobre mi</Link>
            </li>
            <li>
              <Link to="/portafolio">Portafolio</Link>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=573006373865&message=Hola%20necesito%20tus%20servicios" target="_blank">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
