import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          smallPic={image.webformatURL}
          bigPic={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </ul>
  );
};
