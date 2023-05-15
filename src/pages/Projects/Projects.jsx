import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from './CardItem';
import FilterItem from './FilterItem';
import Skeleton from './Skeleton';
import { fetchProjects } from '../../redux/projectsSlice';

import './style.scss';

const filtersList = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Pug',
  'SASS',
];

function Projects() {
  const [filterRules, setFilterRules] = useState([]);
  const { projectsData, status } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  let filterString = '';

  if (filterRules.length > 0) {
    filterString = filterRules.reduce((str, filter) => {
      return (str += `&filter=${filter.toLowerCase()}`);
    }, '');

    console.log(filterString);
  }

  async function fetchData() {
    dispatch(fetchProjects());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="projects">
      <div className="projects__wrapper">
        {/* <div className="projects__tabs tabs">
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
        </div> */}
        <div className="projects__list">
          {status === 'pending'
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
