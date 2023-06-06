import ItemsMenu from "@/utils/ItemsMenu";
import { useState } from "react";
import styles from '../styles/NavBar.module.css'

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className="sticky-top navbar-expand-lg navbar-light bg-light">
      <div className={`container-fluid ${styles.nav__bar}`}>
        <button
          className="navbar-toggler btn"
          onClick={toggleDrawer}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <h1>=</h1>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ItemsMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
