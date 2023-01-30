import heroImage from "../../images/heroImg.jpg";
import s from "./HomePageView.module.css";
const HomePageView = () => {
  return (
    <div className={s.img}>
      <img src={heroImage} alt="heroImg" />
    </div>
  );
};
export default HomePageView;
