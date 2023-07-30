import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={s.navbarInverse}>
      <ul className={s.navList}>
        <div className={s.sidebarHeader}>
          {/* <div className={s.sidebarBrand}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
            >
              FIMA
            </NavLink>
          </div> */}
          <li className={s.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
            >
              About
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
            >
              Gallery
            </NavLink>
          </li>
          <li className={s.navItem}>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.navLink
              }
            >
              Contacts
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navigation;
