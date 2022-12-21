export const Modal = ({ bigPic, tags }) => {
  return (
    <div>
      <div>
        <img src={bigPic} alt={tags} />
      </div>
    </div>
  );
};
