import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'semantic-ui-react';

import '../stylesheets/Pledge.scss';
import { formatCurrency, isInRangeInteger } from '../utils/helps';

const Pledge = ({
  stand: { name, min, left, info } = {},
  value = -1,
  selected,
  onSelect,
  onPledge
}) => {
  const [inactive, setInactive] = useState(false);
  const [checked, setChecked] = useState(false);
  const [amount, setAmount] = useState('');

  const ref = useRef();

  const inputID = name ? name.split(' ').join('-').toLowerCase() : 'no-reward';

  useEffect(() => {
    if (left === 0) setInactive(true);
  }, [left]);

  useEffect(() => {
    checked && onPledge(amount);
  }, [checked, amount, onPledge]);

  useEffect(() => {
    setChecked(value === selected);
  }, [value, selected]);

  return (
    <div
      className={`pledge stand 
      ${inactive && 'inactive'} ${checked && 'checked'}`}
      ref={ref}
    >
      <div className="stand-main">
        <div className="stand-select">
          <input
            type="radio"
            name="pledge"
            id={inputID}
            disabled={inactive}
            value={value}
            checked={checked}
            onChange={() => onSelect(value)}
          />
          <span className="checkmark"></span>
        </div>

        <div className="stand-main-info">
          <div className="stand-header">
            <label htmlFor={inputID} className="stand-name">
              {name ?? 'Pledge with no reward'}
            </label>

            {min && (
              <p className="pledge-min">Pledge {formatCurrency(min)} or more</p>
            )}
          </div>

          {isFinite(left) && (
            <div className="pledges-left">
              <span className="left-num">{left} </span>
              <span className="left-text">left</span>
            </div>
          )}

          <p className="stand-info">
            {info ??
              'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'}
          </p>
        </div>
      </div>

      <div className="pledging">
        <label htmlFor={`${inputID}-amount`}>Enter your pledge</label>

        <Form.Group widths="equal">
          <Form.Input
            icon="dollar sign"
            iconPosition="left"
            type="number"
            placeholder={min}
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <Form.Button disabled={!isInRangeInteger(Number(amount), min)}>
            Continue
          </Form.Button>
        </Form.Group>
      </div>
    </div>
  );
};

export default Pledge;
