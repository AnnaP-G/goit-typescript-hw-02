import { ImageModalProps } from "../App/App.types";


const ImageModal = ({ images }: ImageModalProps) => {
  const { urls, alt_description } = images;
  return (
    <div>
      <img src={urls.regular} alt={alt_description} />
    </div>
  );
};

export default ImageModal;
