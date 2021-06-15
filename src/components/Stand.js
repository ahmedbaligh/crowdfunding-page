import React, { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';

import '../stylesheets/Stand.scss';
import { formatCurrency } from '../utils/helps';

const Stand = ({ stand: { name, min, info, left }, backProject }) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (left === 0) setInactive(true);
  }, [left]);

  return (
    <div className={`stand ${inactive && 'inactive'}`}>
      <header className="stand-header">
        <h3 className="stand-name">{name}</h3>
        <p className="pledge-min">Pledge {formatCurrency(min)} or more</p>
      </header>

      <p className="stand-info">{info}</p>

      <div className="stand-actions">
        <div className="pledges-left">
          <span className="left-num">{left} </span>
          <span className="left-text">left</span>
        </div>

        <Button
          disabled={inactive}
          className="select-button"
          onClick={backProject}
        >
          {!inactive ? 'Select Reward' : 'Out of stock'}
        </Button>
      </div>
    </div>
  );
};

export default Stand;
