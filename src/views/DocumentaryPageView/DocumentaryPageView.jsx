import Container from "../../components/Container/Container";
import GalleryItem from "../../components/Gallery/GalleryItem";
import doc from "../../JSON/documentary films.json";
import s from "./DocumentaryPageView.module.css";
const DocumentaryPageView = () => {
  return (
    <Container>
      <section className={s.section}>
        <GalleryItem list={doc} />{" "}
      </section>
    </Container>
  );
};
export default DocumentaryPageView;
