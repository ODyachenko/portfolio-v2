import { useState } from 'react';
import CardItem from './CardItem';
import cardsList from '../../data/cardsList';

import './style.scss';
import FilterItem from './FilterItem';

const filtersList = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux Toolkit',
  'Pug',
  'SASS',
];

function Projects() {
  const [filterRules, setFilterRules] = useState([]);

  return (
    <div className="projects">
      <div className="projects__wrapper">
        <div className="projects__tabs tabs">
          <span className="tabs__caption">projects</span>
          <ul className="projects__techs">
            {filtersList.map((item, index) => {
              return (
                <FilterItem
                  key={item}
                  value={item}
                  index={index}
                  filterRules={filterRules}
                  setFilterRules={setFilterRules}
                />
              );
            })}
          </ul>
        </div>
        <div className="projects__list">
          {cardsList.map((card) => {
            return <CardItem key={card.id} {...card} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
