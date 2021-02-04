import "./Portfolio.css";
import "../database";
import firebase from "firebase";
import { useState, useEffect } from "react";
import database from '../damian-zsiros-cv-default-rtdb-export.json'

const Navbar = () => {
  const [portfolioList, setPortfolioList] = useState([]);
  const getAllPortfolio = async () => {
    const portafolio = database.portafolio
    await setPortfolioList(portafolio);
  };
  const handleLinks = link => {
    if (link !== "") {
      return link;
    } else {
      return "#";
    }
  };
  useEffect(async () => {
    await getAllPortfolio();
  });
  return (
    <div>
      <div className="portfolio">
        <h1>Portafolio</h1>
        <ol className="articles" style={{}}>
          {portfolioList.map(project => (
            <li
              className="articles__article"
              style={{
                backgroundImage: "url(" + project.link_image + ")",
                animationOrder: 1
              }}
            >
              <a className="articles__link">
                <div className="articles__content articles__content--lhs ">
                  <h2 className="articles__title">{project.nombre}</h2>
                  <p>{project.descripcion}</p>
                  <div className="articles__footer">
                    <a href={project.link_project} target="_blank">
                      <i className="fa fa-book"></i>Ver proyecto
                    </a>
                    <a href={project.link_code} target="_blank">
                      <i className="fa fa-book"></i>Ver codigo
                    </a>
                  </div>
                </div>
                <div
                  className="articles__content articles__content--rhs"
                  aria-hidden="true"
                >
                  <h2 className="articles__title">{project.nombre}</h2>
                  <p>{project.descripcion}</p>
                  <div className="articles__footer">
                    <a href={handleLinks(project.link_project)} target="_blank">
                      <i className="fa fa-book"></i>Ver proyecto
                    </a>
                    <a href={handleLinks(project.link_code)} target="_blank">
                      <i className="fa fa-book"></i>Ver codigo
                    </a>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
