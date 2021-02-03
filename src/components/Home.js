import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="text-imp">
        <img src="./perfil.jpg" className="img-perfil" alt="Imagen de perfil" />
        <div className="texts">
          <h1>I'am</h1>
          <h3>Damian Zsiros</h3>
          <h5>Web Developer</h5>
        </div>
      </div>
      <div className="social-zone">
        <a
          href="https://twitter.com/ProgDamian"
          target="_blank"
          className="twitter"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://github.com/Damian-Zsiros-Prog"
          target="_blank"
          className="github"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/zsirosdamian/?hl=es-la"
          target="_blank"
          className="instagram"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://damianzg.blogspot.com/"
          target="_blank"
          className="blogger"
        >
          <i
            className="fa fa-newspaper-o"
          ></i>
        </a>
      </div>
      <Link to="/sobre-mi" className="big-button">
        Sobre mi <i className="fa fa-long-arrow-right"></i>
      </Link>
    </div>
  );
};

export default Home;
