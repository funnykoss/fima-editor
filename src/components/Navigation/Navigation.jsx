import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={s.navbarInverse}>
      <ul className={s.navList}>
        <div className={s.sidebarHeader}>
          <div className={s.sidebarBrand}>
            <NavLink to="/">FIMA</NavLink>
          </div>
          <li className={s.navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navigation;
