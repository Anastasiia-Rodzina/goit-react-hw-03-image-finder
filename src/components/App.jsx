import { Component } from "react";
import { getImage } from 'api/cards';
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

export class App extends Component {
  state = {
    search: '',
    cards: [],
    loading: false,
    error: null,
    page: 1,
    modalOpen: false,
    cardElement: {},
  };

async componentDidUpdate(prevProps, prevState) {
  const {search, page} = this.state;
if (search && (search !== prevState.search || page !== prevState.page)) {
this.fetchCards();
}
}

async fetchCards () {
  const {search, page} = this.state;
  try {
    this.setState({
      loading: true,
    });
    const { data: {hits}, } = await getImage(search, page);
    this.setState(({cards}) => ({
      cards: hits?.length ? [...cards, ...hits] : cards,
    }));
  } catch (error) {
    this.setState({
      error: error.message,
    });
  } finally {
    this.setState({
      loading: false,
    });
  }
}

handleSearch = ({search}) => {
this.setState({
  search,
  cards: [],
page: 1,
})
}

loadMore = () => {
  this.setState(({page}) => ({page: page + 1}));
}

showModal =({largeImageURL}) => {
  this.setState({
    modalOpen: true,
    cardElement: {
      largeImageURL,
    }
  })
}

closeModal =() => {
  this.setState({
    modalOpen: false,
    cardElement: {}
  })
}

  render() {
    const {handleSearch, loadMore, showModal, closeModal} = this;
    const {cards, loading, modalOpen, cardElement} = this.state;
    const isCards = Boolean(cards.length);
    return (
    <>
      <Searchbar onSubmit={handleSearch}/>
      
      {loading && <Loader />}
      {isCards && <ImageGallery>
        <ImageGalleryItem showModal={showModal} items={cards}/>
        </ImageGallery>}
     {isCards && <Button onClick={loadMore} type="button">Load more</Button>}
      {modalOpen && <Modal close={closeModal}><img src={cardElement.largeImageURL} alt="" /></Modal>}
    </>
  )};
};
