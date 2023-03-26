import { Outlet } from "react-router-dom";
import Container from "../Container";
import Header from "../Header/Header";
import s from "./Layout.module.css";
const Layout = () => {
  return (
    <>
      <Container>
        <div className={s.app}>
          <header className={s.header}>
            <Header />
          </header>
          <main>
            <Outlet />
          </main>
          <footer></footer>
        </div>
      </Container>
    </>
  );
};
export default Layout;
