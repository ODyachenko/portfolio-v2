import { useState } from 'react';
import Bio from './Bio';
import Education from './Education';
import Skills from './Skills';
import University from './University';
import './style.scss';

const categories = ['bio', 'education', 'skills'];
const includesComponents = [<Bio />, <Education />, <Skills />];

function About() {
  const [activeCategoty, setActiveCategory] = useState(0);

  return (
    <div className="about">
      <div className="about__wrapper">
        <ul className="about__tabs tabs">
          <li className="tabs__item">
            <span className={`tabs__caption`}>personal-info</span>
            <ul className={`tabs__list tabs__list--info`}>
              {categories.map((category, index) => {
                return (
                  <li
                    key={category}
                    onClick={() => setActiveCategory(index)}
                    className={`tabs__list-item ${
                      activeCategoty === index ? 'active' : ''
                    }`}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="tabs__item">
            <span className="tabs__caption">contacts</span>
            <ul className="tabs__list tabs__list--contacts">
              <li className="tabs__list-item">
                <a href="mailto:oleg1696@gmail.com">oleg1696@gmail.com</a>
              </li>
              <li className="tabs__list-item">
                <a href="tel:380631605131">+380631605131</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="about__description">
          {includesComponents[activeCategoty]}
        </div>
      </div>
    </div>
  );
}

export default About;
