import css from './image-gallery-item.module.css';

const ImageGalleryItem = ({ showModal, items }) => {
  return items.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li
      onClick={() => showModal({ largeImageURL })}
      className={css.gallery_item}
      key={id}
    >
      <img className={css.gallery_item_image} src={webformatURL} alt={tags} />
    </li>
  ));
};

export default ImageGalleryItem;
