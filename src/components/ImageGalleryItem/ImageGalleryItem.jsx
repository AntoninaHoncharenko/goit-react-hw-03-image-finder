// import { Modal } from 'components/Modal/Modal';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallPic, tags, bigPic }) => {
  return (
    <>
      <GalleryItem>
        <Img src={smallPic} alt={tags} />
      </GalleryItem>
      {/* <Modal bigPic={bigPic} tags={tags} /> */}
    </>
  );
};
