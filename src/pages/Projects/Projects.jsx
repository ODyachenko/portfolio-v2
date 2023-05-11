import { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import FilterItem from './FilterItem';
import Skeleton from './Skeleton';

import './style.scss';

const URL = 'https://64465b720431e885f00fc24e.mockapi.io/collections';

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
  const [projectsData, setProjectsData] = useState([]);
  const [filterRules, setFilterRules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(URL)
      .then((res) => {
        setProjectsData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error: ', error.message));
  }, []);

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
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : projectsData.map((card) => {
                return <CardItem key={card.id} {...card} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
