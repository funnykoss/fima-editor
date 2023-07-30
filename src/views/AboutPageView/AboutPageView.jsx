import About from "../../components/About";
import Container from "../../components/Container/Container";
import s from "./AboutPageView.module.css";

const AboutPageView = () => {
  return (
    <Container>
      <section className={s.section}>
        <About />
      </section>
    </Container>
  );
};
export default AboutPageView;
