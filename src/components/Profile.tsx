import React from "react";
import styles from '../styles/Main.module.css'

export const Profile = () => {
  return (
    <div className="container-fluid">
      <div className="column align-items-center justify-content-center" style={{ height: "100vh" }}>
        <div className="col-md-2 mx-auto text-center">
          <h1>ACA VA LA FOTO</h1>
          <img className="img-fluid photo" src={"https://res.cloudinary.com/domgasuvv/image/upload/v1684959131/mi-foto_rcpssw.jpg"} alt="foto personal" />
        </div>
        <div className="col-md-12 text-center">
          <p className="descr-perfil">
            Soy una persona proactiva, organizada, autodidacta y responsable. Me gusta mucho la informatica, las aplicaciones y los sistemas. Siempre estoy en constante aprendizaje de cosas nuevas, mi objetivo es una posición desafiante y dinámica donde pueda obtener experiencia y nuevos conocimientos para brindar soluciones.
          </p>
        </div>
      </div>
    </div>
  );
};
