import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          smallPic={image.webformatURL}
          bigPic={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </Gallery>
  );
};
