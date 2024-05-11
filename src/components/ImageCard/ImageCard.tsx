import { ImageCardProps } from "../App/App.types";
import css from "./ImageCard.module.css";


const ImageCard = ({ image, onModalOpen }: ImageCardProps) => {
  const { urls, alt_description: description } = image;
  return (
    <li className={css.imgItem}>
      <img
        className={css.imgCard}
        src={urls.small}
        alt={description}
        onClick={() => onModalOpen(image)}
      />
    </li>
  );
};

export default ImageCard;
