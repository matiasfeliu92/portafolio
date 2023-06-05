import Link from "next/link";
import styles from '../styles/NavBar.module.css'

const itemsNav = [
    { itemName: "Main", itemLink: "/" },
    { itemName: "Profile", itemLink: "/profile" },
    { itemName: "Skills", itemLink: "/skills" },
    { itemName: "Professional works", itemLink: "/works" },
    { itemName: "Contact", itemLink: "/contact" },
  ];

const ItemsMenu = () => {
    const listItems = itemsNav.map((item: any) => (
      <li className="text-center p-1">
        <Link className={`${styles.navItem} ${styles.liFont}`} href={item.itemLink}>
          {item.itemName}
        </Link>
      </li>
    ));

    return <ul className="navbar-nav align-items-center">{listItems}</ul>;
};

export default ItemsMenu