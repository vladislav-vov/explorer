import './Folder.scss';

const Folder = ({ name, onClick }) => {
  return (
    <div className="folder" onClick={onClick}>
      <div className="folder__icon">
        <div className="folder__back"></div>
        <div className="folder__front"></div>
      </div>
      <span className="folder__name">{name}</span>
    </div>
  );
};

export default Folder;
