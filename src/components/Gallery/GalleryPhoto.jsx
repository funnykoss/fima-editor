import { v4 as uuidv4 } from "uuid";

const GalleryPhoto = ({ img }) => {
  return (
    <>
      {img.map((item) => {
        return (
          <li key={uuidv4()}>
            <img src={item} alt="foto" />
          </li>
        );
      })}
    </>
  );
};
export default GalleryPhoto;
