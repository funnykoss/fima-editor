import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import s from "./Layout.module.css";
const Layout = () => {
  return (
    <>
      <div className={s.app}>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <footer></footer>
    </>
  );
};
export default Layout;
