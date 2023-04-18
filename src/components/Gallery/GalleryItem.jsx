const GalleryItem = ({ list }) => {
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
              <li key={id}>
                <p>{nameart}</p>
                <p>{year}</p>
                <p>{exhibition}</p>
                <p>{title}</p>
                <p>{description}</p>
                <a href={link}>пример</a>
                <img src={img} alt="foto" />
              </li>
            );
          },
        )}
      </ul>
    </>
    // <>

    //   <li>
    //     <p>{list.nameart}</p>
    //     {/* <p>{list.year}</p>
    //     <p>{list.exhibition}</p>
    //     <p>{list.title}</p>
    //     <p>{list.description}</p> */}
    //     {/* <a href={list.link}>пример</a>
    //     <img src={list.img} alt="foto" /> */}
    //   </li>
    // </>
  );
};
export default GalleryItem;
