import GalleryItem from "../../components/Gallery/GalleryItem";
import doc from "../../JSON/documentary films.json";
const DocumentaryPageView = () => {
  return (
    <>
      <GalleryItem list={doc} />{" "}
    </>
  );
};
export default DocumentaryPageView;
