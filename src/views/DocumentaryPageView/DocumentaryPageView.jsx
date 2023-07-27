import GalleryItem from "../../components/Gallery/GalleryItem";
import doc from "../../JSON/documentary films.json";
import s from "./DocumentaryPageView.module.css";
const DocumentaryPageView = () => {
  return (
    <section className={s.section}>
      <GalleryItem list={doc} />{" "}
    </section>
  );
};
export default DocumentaryPageView;
