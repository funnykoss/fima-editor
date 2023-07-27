import heroImage from "../../images/heroImg.jpg";
import s from "./HomePageView.module.css";
const HomePageView = () => {
  return (
    <section className={s.section}>
      <div className={s.img}>
        <img src={heroImage} alt="heroImg" />
      </div>
    </section>
  );
};
export default HomePageView;
