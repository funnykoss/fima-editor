import Navigation from "../Navigation";
import s from "./Header.module.css";
const Header = () => {
  return (
    <div className={s.appBar}>
      <Navigation />
    </div>
  );
};
export default Header;
