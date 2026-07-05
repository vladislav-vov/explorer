import { useMemo, useEffect, useState } from 'react'
import { useHttp } from './hooks/useHttp'

import { Icon } from "@iconify/react";

const BASE_URL = 'http://localhost:3000';

function App() {
  const [tree, setTree] = useState(null);
  const [path, setPath] = useState([]);
  const {request} = useHttp();

  useEffect(() => {
    request(`${BASE_URL}/root`)
      .then(data => {
        setTree(data);
      })
      .catch(err => console.error(err))
  }, [])

  const currentFolder = useMemo(() => {
    if (!tree) return null;

    let current = tree;

    for (const p of path) {
      current = current[p].children;
    }

    return current;
  }, [tree, path]);

  const handleClick = ({name, item}) => {
    if (item.type === "folder") {
      setPath([...path, name]);
    }
  }

  return (
    <div>
      <div className="breadcrumbs">
        <span className='path' onClick={() => setPath([])}>root</span>

        {path.map((folder, index) => (
          <span key={index}>
            {" / "}
            <span
              className='path'
              onClick={() => {
                setPath(path.slice(0, index + 1));
              }}
            >
              {folder}
            </span>
          </span>
        ))}
      </div>

      {currentFolder && Object.entries(currentFolder).map(([name, item]) => {
          return (
            item.type === "folder" ? 
            <Folder key={name} name={name} onClick={() => handleClick({name, item})}/> : 
            <File key={name} name={name} />
        )})
      }
      
    </div>
  )
}

const Folder = ({name, onClick}) => {
  return (
      <div className='folder' onDoubleClick={onClick}>
        <Icon icon="mdi:folder" width="32" />
        <p>{name}</p>
      </div>
  );
}

const File = ({ name }) => {
  return (
    <div className='folder' >
      <Icon icon="mdi:file" width="32" />
      {name}
    </div>
  )
}

export default App
