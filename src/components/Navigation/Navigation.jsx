import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <ul className={s.navList}>
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
    </ul>
  );
};
export default Navigation;
