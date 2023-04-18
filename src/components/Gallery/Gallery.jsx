import GalleryItem from "./GalleryItem";

const Gallery = ({ list }) => {
  return (
    <>
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
          }) => {
            return (
              <GalleryItem
                key={id}
                nameart={nameart}
                // year={year}
                // exhibition={exhibition}
                // title={title}
                // description={description}
                // img={img}
                // link={link}
              />
            );
          },
        )}
      </ul>
    </>
  );
};
export default Gallery;
