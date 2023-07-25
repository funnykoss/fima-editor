import { v4 as uuidv4 } from "uuid";
import s from "./GalleryItem.module.css";

const GalleryPhoto = ({ img }) => {
  return (
    <>
      {img.map((item) => {
        return (
          <li className={s.item} key={uuidv4()}>
            <img src={item} alt="foto" />
          </li>
        );
      })}
    </>
  );
};
export default GalleryPhoto;
