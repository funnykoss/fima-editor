import heroImage from "../../images/heroImg.jpg";
import s from "./HomePageView.module.css";
import Container from "../../components/Container";
const HomePageView = () => {
  return (
    <Container>
      <section className={s.section}>
        <div className={s.sectionDiv}>{/* <p>Title</p> */}</div>
      </section>
    </Container>
  );
};
export default HomePageView;
