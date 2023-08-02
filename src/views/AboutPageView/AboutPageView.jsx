import About from "../../components/About";
import Container from "../../components/Container/Container";
import s from "./AboutPageView.module.css";

const AboutPageView = () => {
  return (
    <section className={s.section}>
      <About />
    </section>
  );
};
export default AboutPageView;
