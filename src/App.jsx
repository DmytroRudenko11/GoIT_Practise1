import { SearchForm } from "@/SearchForm";
import { useGalleryContext } from "./context";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
import { fetchPhotos } from "api/api";
import { useEffect, useState, useRef } from "react";
import Modal from "@/Modal/Modal";

function App() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [prevQuery, setPrevQuery] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const prevQuery = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.searchfield.value);
    setIsLoading(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openPicture = (url) => {
    setModalImage(url);
  };

  const onScroll = (e) => {
    let scrollY = window.scrollY;
    let innerHeight = window.innerHeight;
    let offsetHeight = document.body.offsetHeight;

    if (scrollY + innerHeight > offsetHeight - 100) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // componentDidUpdate check isLoading

    const getPhotos = async (page, data) => {
      const images = await fetchPhotos(query, page);
      setIsLoading(false);
      setPhotos([...data, ...images]);
      setCurPage(curPage + 1);
    };
    if (isLoading) {
      if (query !== prevQuery.current) {
        prevQuery.current = query;
        // setPrevQuery(query);
        setCurPage(1);
        getPhotos(curPage, []);
      } else {
        getPhotos(curPage, photos);
      }
    }
  }, [isLoading]);

  return (
    <div>
      <HeaderComponent>
        <SearchForm onSubmit={handleSubmit} />
      </HeaderComponent>
      <ImageGrid
        images={photos}
        isLoading={isLoading}
        openModal={toggleModal}
        getPicture={openPicture}
      />
      {showModal && <Modal toggleModal={toggleModal} src={modalImage} />}
    </div>
  );
}

export default App;
