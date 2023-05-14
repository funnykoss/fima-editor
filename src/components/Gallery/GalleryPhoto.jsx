const GalleryPhoto = ({ src, dataLargeImg, tags }) => {
  return (
    <>
      <li>
        <img src={src} alt={tags} data-largeimg={dataLargeImg} />
      </li>
    </>
  );
};
export default GalleryPhoto;
