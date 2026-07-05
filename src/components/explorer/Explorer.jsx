import { useEffect, useState, useMemo } from 'react';

import { Breadcrumbs, ExplorerList } from '@/components/index';

import { useHttp } from '@/hooks/useHttp';

import './Explorer.scss';

const Explorer = () => {
  const [data, setData] = useState([]);
  const [path, setPath] = useState([]);
  const { request } = useHttp();

  useEffect(() => {
    request('/root')
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const goBack = () => {
    setPath(path.slice(0, -1));
  };

  const handleFolderClick = ({ name, item }) => {
    if (item.type === 'folder') {
      setPath([...path, name]);
    }
  };

  return (
    <div className="explorer">
      <div className="explorer__toolbar">
        <div className="explorer__nav">
          <button
            className="explorer__nav-btn"
            disabled={path.length === 0}
            onClick={goBack}
          >
            ‹
          </button>
        </div>
        <Breadcrumbs path={path} setPath={setPath} />
      </div>
      <div className="explorer__content">
        <ExplorerList
          data={data}
          path={path}
          handleFolderClick={handleFolderClick}
        />
      </div>
    </div>
  );
};

export default Explorer;
