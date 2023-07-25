import GalleryPhoto from "./GalleryPhoto";
import s from "./GalleryItem.module.css";

const GalleryItem = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map(
          ({
            id,
            nameart,
            year,
            title,
            description,
            exhibition,
            link,
            img,
            country,
            Duration,
            Director,
            photography,
            editing,
            Trailer,
          }) => {
            return (
              <div key={id}>
                <li>
                  <p>{nameart}</p>
                  <p>{year}</p>
                  {exhibition && <p>{exhibition}</p>}
                  {country && <p>{country}</p>}
                  {Duration && <p>{Duration}</p>}
                  {Director && <p>Director: {Director}</p>}
                  {photography && <p>Photography: {photography}</p>}
                  {editing && <p>Editing: {editing}</p>}
                  {title && <p>{title}</p>}
                  <p>{description}</p>
                  {link && <a href={link}>пример</a>}
                  {Trailer && <a href={Trailer}>Тейлер</a>}
                </li>
                <ul className={s.container}>
                  {img && <GalleryPhoto img={img} />}
                </ul>
              </div>
            );
          },
        )}
      </ul>
    </div>
  );
};
export default GalleryItem;
