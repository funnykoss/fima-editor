import GalleryItem from "../../components/Gallery/GalleryItem";
import install from "../../JSON/installation.json";
const InstallationArtPageView = () => {
  return (
    <>
      <GalleryItem list={install} />
    </>
  );
};
export default InstallationArtPageView;
