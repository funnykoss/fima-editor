import GalleryItem from "../../components/Gallery/GalleryItem";
import install from "../../JSON/installation.json";
import s from "./InstallationArtPageView.module.css";
const InstallationArtPageView = () => {
  return (
    <section className={s.section}>
      <GalleryItem list={install} />
    </section>
  );
};
export default InstallationArtPageView;
