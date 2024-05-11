import { ImageGalleryProps } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css'


const ImageGallery = ({ images, onModalOpen }: ImageGalleryProps) => {
  return (
    <ul className={css.galleryList}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <ImageCard key={image.id} image={image} onModalOpen={onModalOpen} />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
