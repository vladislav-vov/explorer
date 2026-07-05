import { Fragment } from 'react';

import './Breadcrumbs.scss';

const Breadcrumbs = ({ path, setPath }) => {
  return (
    <div className="breadcrumbs">
      <div
        className={`breadcrumbs__item${path.length === 0 ? ' active' : ''}`}
        onClick={() => setPath([])}
      >
        <div className="breadcrumbs__icon root-icon"></div>
        <span className="breadcrumbs__name">root</span>
      </div>
      {path.length > 0 && <span className="breadcrumbs__separator">›</span>}

      {path.map((name, index) => {
        const isLast = index === path.length - 1;

        return (
          <Fragment key={index}>
            <div
              className={`breadcrumbs__item${isLast ? ' active' : ''}`}
              onClick={() => setPath(path.slice(0, index + 1))}
            >
              <div className="breadcrumbs__icon"></div>
              <span className="breadcrumbs__name">{name}</span>
            </div>
            {!isLast && <span className="breadcrumbs__separator">›</span>}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
