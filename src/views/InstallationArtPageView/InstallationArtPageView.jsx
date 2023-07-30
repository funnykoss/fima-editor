import Container from "../../components/Container/Container";
import GalleryItem from "../../components/Gallery/GalleryItem";
import install from "../../JSON/installation.json";
import s from "./InstallationArtPageView.module.css";
const InstallationArtPageView = () => {
  return (
    <Container>
      <section className={s.section}>
        <GalleryItem list={install} />
      </section>
    </Container>
  );
};
export default InstallationArtPageView;
