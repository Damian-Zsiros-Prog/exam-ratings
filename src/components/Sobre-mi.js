import "./Sobre-mi.css";
import "./Sobre-mi.script.js";
import { useState, useEffect } from "react";
import firebase from "firebase";
import "../database";

const Sobre_mi = () => {
  const [estudiosList, setEstudiosList] = useState([]);
  const [experienciaList, setExperienciaList] = useState([]);
  const [cursos, setCursos] = useState([]);
  const getAllEstudios = async () => {
    const estudios = await (
      await firebase.database().ref("estudios").get()
    ).val();
    await setEstudiosList(estudios);
  };
  const getAllExperiencias = async () => {
    const experiencias = await (
      await firebase.database().ref("experiencia").get()
    ).val();
    await setExperienciaList(experiencias);
  };
  const getAllCursos = async () => {
    const cursos = await (await firebase.database().ref("cursos").get()).val();
    for (let i = 0; i < cursos.length; i++) {
      const element = cursos[i];
      if (element.link_certificado == "") {
        element.link_certificado = "#cursos";
      }
    }
    await setCursos(cursos);
  };

  useEffect(async () => {
    await getAllEstudios();
    await getAllExperiencias();
    await getAllCursos();
  });
  return (
    <div className="sobre-mi">
      <div className="row">
        <div className="col-8">
          <div className="texts" id="sobre-mi">
            <img className="logo" src="./perfil.jpg" alt="" />
            <h2>Hola mundo /></h2>
            <div className="sobre_mi_p">
              <p>
                Siempre he estado interesado en cómo funciona la tecnología y
                todo lo que la conforma.
              </p>
              <p>
                Desde cómo los personajes se mueven dentro de los videojuegos,
                hasta el funcionamiento de las redes sociales y los sitios web.
              </p>
              <p>
                Es por eso que decidí convertirme en desarrolador web. Capaz de
                construir aplicaciones, desde la parte visual hasta las bases de
                datos.
              </p>
            </div>
          </div>
          <div className="habilidades" id="habilidades">
            <h1>
              <i className="fa fa-code icon-sec"></i> Conocimientos tecnicos y
              habilidades
            </h1>
            <div className="categorias-habilidades">
              <div className="categoria frontend">
                <h3 className="h3">Desarrollo Front-end</h3>
                <ul>
                  <li className="conocimiento">HTML5</li>
                  <li className="conocimiento">CSS3, Flexbox</li>
                  <li className="conocimiento">Javascript</li>
                  <li className="conocimiento">
                    Responsive Web Design (Diseño adaptable)
                  </li>
                </ul>
                <ul>
                  <li className="conocimiento">
                    Frameworks: Bootstrap 4, Bootswatch
                  </li>
                  <li className="conocimiento">ReactJS</li>
                </ul>
              </div>

              <div className="categoria backend">
                <h3 className="h3">Desarrollo Back-end</h3>
                <ul>
                  <li className="conocimiento">NodeJS (Express)</li>
                  <li className="conocimiento">REST api</li>
                  <li className="conocimiento">PHP</li>
                  <li className="conocimiento">Python</li>
                  <li className="conocimiento">Java</li>
                </ul>
              </div>
              <div className="categoria extra">
                <h3 className="h3">Extras</h3>
                <ul>
                  <li className="conocimiento">Pseint</li>
                  <li className="conocimiento">C++</li>
                  <li className="conocimiento">Photoshop</li>
                </ul>
              </div>
              <div className="categoria editor">
                <h3 className="h3">Editores de codigo</h3>
                <ul>
                  <li className="conocimiento">Visual Studio Code</li>
                  <li className="conocimiento">Sublime text</li>
                  <li className="conocimiento">Atom</li>
                </ul>
              </div>
              <div className="categoria bd">
                <h3 className="h3">Bases de datos</h3>
                <ul>
                  <li className="conocimiento">MySQL</li>
                  <li className="conocimiento">Firebase</li>
                </ul>
              </div>
              <div className="categoria extra">
                <h3 className="h3">Ofimatica</h3>
                <ul>
                  <li className="conocimiento">Excel</li>
                  <li className="conocimiento">Power Point</li>
                  <li className="conocimiento">Word</li>
                </ul>
              </div>
            </div>
            <div className="estudios" id="estudios">
              <h1>
                <i className="fa fa-book icon-sec"></i> Estudios
              </h1>
              <div className="cards">
                {estudiosList.map(estudio => (
                  <div class="card">
                    <h4>{estudio.titulo}</h4>
                    <h5>{estudio.fecha}</h5>
                    <a href={estudio.link_lugar} target="_blank">
                      {estudio.lugar}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="cursos" id="cursos">
              <h1>
                <i className="fa fa-book icon-sec"></i> Cursos
              </h1>
              <div className="card-cursos">
                {cursos.map(curso => (
                  <div className="slide-container">
                    <div className="wrapper">
                      <div className="clash-card barbarian">
                        <div className="clash-card__level clash-card__level--barbarian">
                          {curso.año}
                        </div>
                        <a href={curso.link_curso} target="_blank">
                          <div className="clash-card__unit-name">
                            {curso.curso}
                          </div>
                        </a>
                        <div className="clash-card__unit-description">
                          Horas: {curso.horas}
                          <br />
                          Lugar: {curso.lugar}
                          <br />
                          Tipo: {curso.tipo}
                        </div>
                        <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                          <div className="one-third" style={{ width: "100%" }}>
                            <a
                              href={curso.link_certificado}
                              style={{ color: "#fff" }}
                            >
                              <div className="stat-value">Ver certificado</div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="experiencia" id="experiencia">
              <h1>
                <i className="fa fa-briefcase icon-sec"></i> Experiencia
              </h1>
              <div className="cards">
                {experienciaList.map(experiencia => (
                  <div class="card">
                    <a href={experiencia.link_empresa} target="_blank">
                      <img
                        src={experiencia.img_empresa}
                        alt={experiencia.empresa}
                      />
                    </a>
                    <h4>{experiencia.puesto}</h4>
                    <h5>{experiencia.fecha}</h5>
                    <a href={experiencia.link_empresa} target="_blank">
                      {experiencia.empresa}
                    </a>
                    <h5>{experiencia.tareas_puesto}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <nav>
            <a href="#sobre-mi">Sobre mi</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#estudios">Estudios</a>
            <a href="#cursos">Cursos</a>
            <a href="#experiencia">Experiencia</a>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Sobre_mi;
