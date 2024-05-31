import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const {
    urls: { small },
    alt_description: alt,
  } = image;

  return (
    <div className={css.imageCard}>
      <img
        src={small}
        alt={alt}
        onClick={() => openModal(image)}
        className={css.image}
      />
    </div>
  );
};

export default ImageCard;

// import { useState } from "react";
// import css from "./ImageCard.module.css";
// import ImageModal from "../ImageModal/ImageModal";

// const ImageCard = ({ image }) => {
//   const {
//     urls: { small, regular },
//     alt_description: alt,
//   } = image;
//   const [modalIsOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={css.imageCard}>
//       <img src={small} alt={alt} onClick={openModal} />
//       {modalIsOpen && (
//         <ImageModal
//           alt={alt}
//           regular={regular}
//           setIsOpen={closeModal}
//           modalIsOpen={modalIsOpen}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageCard;
