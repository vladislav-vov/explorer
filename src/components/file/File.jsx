import './File.scss';

const File = ({ name }) => {
  return (
    <div className="file">
      <div className="file__icon">
        <div className="file__corner"></div>
      </div>
      <span className="file__name">{name}</span>
    </div>
  );
};

export default File;
