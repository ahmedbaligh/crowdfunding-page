import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

import '../stylesheets/Stand.scss';
import { formatCurrency } from '../utils/helps';

const Stand = ({ stand: { name, min, info, left }, backProject }) => {
  const [active, setActive] = useState(left ? true : false);

  return (
    <div className={`stand ${active ? '' : 'inactive'}`}>
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
          disabled={!active}
          className="select-button"
          onClick={backProject}
        >
          {active ? 'Select Reward' : 'Out of stock'}
        </Button>
      </div>
    </div>
  );
};

export default Stand;
