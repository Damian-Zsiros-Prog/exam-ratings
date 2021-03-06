import "./Contacto.css";

const Contacto = () => {
  return (
    <div className="contact_form">
      <div className="formulario">
        <h1>Formulario de contacto</h1>
        <h3>Escríbenos y en breve los pondremos en contacto contigo</h3>
        <form action="submeter-formulario.php" method="post">
          <p>
            <label htmlFor="nombre" className="colocar_nombre">
              Nombre
              <span className="obligatorio">*</span>
            </label>
            <input
              type="text"
              name="introducir_nombre"
              id="nombre"
              required="obligatorio"
              placeholder="Escribe tu nombre"
            />
          </p>
          <p>
            <label htmlFor="email" className="colocar_email">
              Email
              <span className="obligatorio">*</span>
            </label>
            <input
              type="email"
              name="introducir_email"
              id="email"
              required="obligatorio"
              placeholder="Escribe tu Email"
            />
          </p>
          <p>
            <label htmlFor="telefone" className="colocar_telefono">
              Teléfono
            </label>
            <input
              type="tel"
              name="introducir_telefono"
              id="telefono"
              placeholder="Escribe tu teléfono"
            />
          </p>
          <p>
            <label htmlFor="website" className="colocar_website">
              Sitio web
            </label>
            <input
              type="url"
              name="introducir_website"
              id="website"
              placeholder="Escribe la URL de tu web"
            />
          </p>
          <p>
            <label htmlFor="asunto" className="colocar_asunto">
              Asunto
              <span className="obligatorio">*</span>
            </label>
            <input
              type="text"
              name="introducir_asunto"
              id="assunto"
              required="obligatorio"
              placeholder="Escribe un asunto"
            />
          </p>
          <p>
            <label htmlFor="mensaje" className="colocar_mensaje">
              Mensaje
              <span className="obligatorio">*</span>
            </label>
            <textarea
              name="introducir_mensaje"
              className="texto_mensaje"
              id="mensaje"
              required="obligatorio"
              placeholder="Deja aquí tu comentario..."
              defaultValue={""}
            />
          </p>
          <button type="submit" name="enviar_formulario" id="enviar">
            <p>Enviar</p>
          </button>
          <p className="aviso">
            <span className="obligatorio"> * </span>los campos son obligatorios.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
