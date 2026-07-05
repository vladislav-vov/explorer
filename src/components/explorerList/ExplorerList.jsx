import { useMemo } from 'react';

import { Folder, File } from '@/components/index';

const ExplorerList = ({ data, path, handleFolderClick }) => {
  const currentFolders = useMemo(() => {
    if (!data) return null;

    let current = data;

    if (path.length) {
      for (const p of path) {
        current = current[p].children;
      }
    }

    return current;
  }, [data, path]);

  return Object.entries(currentFolders).map(([name, item]) => {
    return item.type === 'folder' ? (
      <Folder
        key={name}
        name={name}
        onClick={() => handleFolderClick({ name, item })}
      />
    ) : (
      <File key={name} name={name} />
    );
  });
};

export default ExplorerList;
