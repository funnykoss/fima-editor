// import Gallery from "../../components/Gallery/Gallery";
import GalleryItem from "../../components/Gallery/GalleryItem";
import video from "../../JSON/video.json";
import s from "./VideoArtPageView.module.css";
const VideoArtPageView = () => {
  return (
    <section className={s.section}>
      <GalleryItem list={video} />
    </section>
  );
};
export default VideoArtPageView;
