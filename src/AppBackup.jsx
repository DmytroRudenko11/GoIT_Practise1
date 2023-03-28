import { SearchForm } from "@/SearchForm";
import { HeaderComponent } from "@/Header";
import { ImageGrid } from "@/ImageGrid";
import { fetchPhotos } from "api/api";
import { Component } from "react";
import Modal from "@/Modal/Modal";
class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    query: "",
    curPage: 1,
    showModal: false,
    modalImage: null,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  openPicture = (url) => {
    this.setState({ modalImage: url });
  };

  async componentDidUpdate(_, prevState) {
    console.log(this.state.curPage);
    console.log("componentDidUpdate");
    if (this.state.isLoading) {
      if (this.state.query !== prevState.query) {
        const photos = await fetchPhotos(this.state.query, 1);
        this.setState({
          photos: photos,
          isLoading: false,
          curPage: 1,
        });
      } else {
        const photos = await fetchPhotos(
          this.state.query,
          this.state.curPage + 1
        );
        this.setState({
          ...prevState,
          photos: [...prevState.photos, ...photos],
          isLoading: false,
          curPage: prevState.curPage + 1,
        });
      }
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll = (e) => {
    // console.log(window.scrollY);
    console.log("onScroll");
    let scrollY = window.scrollY;
    let innerHeight = window.innerHeight;
    let offsetHeight = document.body.offsetHeight;

    if (scrollY + innerHeight > offsetHeight - 100) {
      this.setState({ isLoading: true });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true,
      query: event.target.elements.searchfield.value,
    });
  };

  render() {
    const { showModal, photos, isLoading, modalImage } = this.state;
    return (
      <div>
        <HeaderComponent>
          <SearchForm onSubmit={this.handleSubmit} />
        </HeaderComponent>
        <ImageGrid
          images={photos}
          isLoading={isLoading}
          openModal={this.toggleModal}
          getPicture={this.openPicture}
        />
        {showModal && <Modal src={modalImage} />}
      </div>
    );
  }
}

export default App;
