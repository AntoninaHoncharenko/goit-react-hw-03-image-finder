import { Component } from 'react';
import { ImageModal } from 'components/Modal/Modal';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  closeModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const { smallPic, tags, bigPic } = this.props;
    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <Img src={smallPic} alt={tags} />
        </GalleryItem>
        {this.state.isOpenModal && (
          <ImageModal
            bigPic={bigPic}
            tags={tags}
            isOpen={this.state.isOpenModal}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
