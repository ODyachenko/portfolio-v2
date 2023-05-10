import { useEffect, useState } from 'react';
import html from '../../assets/img/html.svg';
import css from '../../assets/img/css.svg';
import react from '../../assets/img/react.svg';
import javascript from '../../assets/img/javascript.svg';
import redux from '../../assets/img/redux.svg';
import pug from '../../assets/img/pug.svg';
import sass from '../../assets/img/sass.svg';

const iconsList = [html, css, react, javascript, redux, pug, sass];

function FilterItem({ value, index, filterRules, setFilterRules }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setFilterRules([...filterRules, value]);
    } else {
      setFilterRules(filterRules.filter((text) => text !== value));
    }
  }, [checked]);

  return (
    <li className="projects__techs-item">
      <input
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="custom"
        type="checkbox"
        id={`custom${index + 1}`}
      />
      <label className="checkbox" htmlFor={`custom${index + 1}`}>
        <img src={iconsList[index]} alt="icon" />
        {value}
      </label>
    </li>
  );
}

export default FilterItem;
