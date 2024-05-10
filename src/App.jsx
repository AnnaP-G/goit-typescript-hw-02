import { useEffect, useState } from "react";
import { requestImages } from "./components/apiService/api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!query) return;
    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const handleSubmit = (data) => {
    setPage(1);
    setQuery(data);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const onModalOpen = (images) => {
    setModalImage(images);
    setModalIsOpen(true);
  };

  const onModalClose = () => {
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
