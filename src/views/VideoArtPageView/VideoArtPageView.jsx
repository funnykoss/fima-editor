// import Gallery from "../../components/Gallery/Gallery";
import GalleryItem from "../../components/Gallery/GalleryItem";
import video from "../../JSON/video.json";
const VideoArtPageView = () => {
  return (
    <>
      <GalleryItem list={video} />
    </>
  );
};
export default VideoArtPageView;
