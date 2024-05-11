import { useEffect, useState } from "react";
import { requestImages } from "../apiService/api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ReactModal from "react-modal";
import { Image, ImagesData } from "./App.types";

ReactModal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImages<ImagesData>({ query, page });
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSubmit = (data: string): void => {
    setPage(1);
    setQuery(data);
  };

  const handleClick = (): void => {
    setPage(page + 1);
  };

  const onModalOpen = (images: Image | null): void => {
    setModalImage(images);
    setModalIsOpen(true);
  };

  const onModalClose = (): void => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} onModalOpen={onModalOpen} />}
      {images.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn onClick={handleClick} />
      )}
      <ReactModal isOpen={modalIsOpen} onRequestClose={onModalClose}>
        {modalImage && <ImageModal images={modalImage} />}
      </ReactModal>
    </div>
  );
};

export default App;
