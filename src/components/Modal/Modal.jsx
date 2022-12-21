import { Overlay, ModalContainer, ModalImg } from './Modal.styled';

export const Modal = ({ bigPic, tags }) => {
  return (
    <Overlay>
      <ModalContainer>
        <ModalImg src={bigPic} alt={tags} />
      </ModalContainer>
    </Overlay>
  );
};
