// import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ smallPic, tags, bigPic }) => {
  return (
    <>
      <li>
        <img src={smallPic} alt={tags} />
      </li>
      {/* <Modal bigPic={bigPic} tags={tags} /> */}
    </>
  );
};
