import React from "react";
import styles from '../styles/Profile.module.css'

export const Profile = () => {
  return (
    <section className={`${styles.personal}`}>
                <div className={`${styles.personal__contenido}`}>
                    <div className={`${styles.personal__foto}`}>
                        <img className={`${styles.personal__img}`} src={"https://res.cloudinary.com/domgasuvv/image/upload/v1684959131/mi-foto_rcpssw.jpg"} alt="foto personal"/>
                    </div>
                
                    <div className={`${styles.personal__texto}`}>
          <p className={`${styles.personal__texto}`}>Soy una persona proactiva, organizada, autodidacta y responsable. Me gusta mucho la informatica, las aplicaciones y los sistemas. 
Siempre estoy en constante aprendizaje de cosas nuevas, mi objetivo es una posición desafiante y dinámica donde pueda obtener experiencia y nuevos conocimientos para brindar soluciones.</p>
                    </div>
                </div>
            </section>
  );
};
