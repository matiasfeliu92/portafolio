import Link from "next/link";
import React from "react";
import styles from '../styles/Main.module.css'

export const Main = () => {
  return (
    <div className="container-fluid">
      <div className="column">
        <div className={`d-flex align-items-center justify-content-center ${styles.divContainer}`}>
          <div className={`col-md-6 mt-12 text-center ${styles.divNombre}`}>
            <i className="bi bi-display"></i>
            <h2 className="nombre">Matias Mazparrote Feliu</h2>
            <h4 className="descripcion">Full Stack Developer</h4>
            <Link
              href="https://res.cloudinary.com/domgasuvv/image/upload/v1682438889/CV-Matias_Mazparrote_abglvl.jpg"
              target={"_blank"}
            >
              Ver Cv
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
