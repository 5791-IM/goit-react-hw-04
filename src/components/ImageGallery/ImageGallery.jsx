// src/components/ImageGallery;
// {/* <ul>
//   {/* Набір елементів списку із зображеннями */}
//   <li>
//     <div>
//       <img src="" alt="" />
//     </div>
//   </li>
// </ul>; */}

import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
