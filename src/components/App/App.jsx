import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect, useRef, useState } from "react";
import getImages from "../../Photo-api";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import css from "./App.module.css";

Modal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const bottomRef = useRef(null);

  const onSubmit = (query) => {
    setPage(1);
    setImages([]);
    // setTotalResults(0);
    setSearchQuery(query);
    if (query === "") return toast.error("Write something to start searching");
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
        if (page > 1) {
          bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  // const handleSearch = async (query) => {
  //   setSearchQuery(query);
  //   setPage(1);
  //   setImages([]);
  // };

  const handleLoadMore = () => {
    // setPage(page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  // const handleSubmit = async (query) => {
  //   try {
  //     setImages([]);
  //     setIsError(false);
  //     setIsLoading(true);

  //     const data = await getImages(query);
  //     setImages(data);
  //   } catch (error) {
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className={css.app}>
      <h1>Search images</h1>
      <SearchBar onSubmit={onSubmit} />
      {isError && (
        <ErrorMessage message="Oops! There was an error! Try again!" />
      )}
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <div ref={bottomRef}></div>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
