// import Gallery from "../../components/Gallery/Gallery";
import Container from "../../components/Container/Container";
import GalleryItem from "../../components/Gallery/GalleryItem";
import video from "../../JSON/video.json";
import s from "./VideoArtPageView.module.css";
const VideoArtPageView = () => {
  return (
    <Container>
      <section className={s.section}>
        <GalleryItem list={video} />
      </section>
    </Container>
  );
};
export default VideoArtPageView;
