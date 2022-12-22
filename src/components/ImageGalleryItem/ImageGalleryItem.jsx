import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({ isOpenModal: true });
  };

  render() {
    const { smallPic, tags, bigPic } = this.props;
    return (
      <>
        <GalleryItem onClick={this.openModal}>
          <Img src={smallPic} alt={tags} />
        </GalleryItem>
        {this.state.isOpenModal && <Modal bigPic={bigPic} tags={tags} />}
      </>
    );
  }
}
