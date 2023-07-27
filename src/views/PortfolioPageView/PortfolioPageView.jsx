import s from "./PortfolioPageView.module.css";
import { Link } from "react-router-dom";
const PortfolioPageView = () => {
  return (
    <section className={s.section}>
      <Link to={{ pathname: "installation" }}>Installation Art</Link>
      <Link to={{ pathname: "video" }}>Video Art</Link>
      <Link to={{ pathname: "documentary" }}>Documentary films</Link>
    </section>
  );
};
export default PortfolioPageView;
