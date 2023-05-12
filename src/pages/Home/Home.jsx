import { useEffect, useRef, useState } from 'react';
import Snake from '../../components/Snake/Snake';
import './style.scss';

function Home() {
  const [counter, setCounter] = useState(0);
  const snakeRef = useRef(false);

  useEffect(() => {
    if (window.innerWidth > 1023) {
      snakeRef.current = true;
    }
  }, [window.innerWidth]);

  return (
    <section className="home">
      <div className="container home__wrapper">
        <div className="home__content">
          <span className="home__caption">Hi all. I am</span>
          <h1 className="home__title">Oleh Diachenko</h1>
          <h2 className="home__subtitle">
            {' '}
            <span className="home__subtitle--blink">{'> '}</span>
            <span className="home__subtitle--animate">Front-end developer</span>
          </h2>
          <p className="home__social">
            <span className="home__social--comment">
              {' // find my profile on Github'}
            </span>
            <span className="home__social--code">
              <span className="purple">const</span>
              {' = '}
              <span className="green">githubLink</span>{' '}
              <a
                className="orange"
                href="https://github.com/ODyachenko"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                “https://github.com/ODyachenko”
              </a>
            </span>
          </p>
        </div>
        <div className="home__game game">
          <div className="game__field">
            {snakeRef && <Snake counter={counter} setCounter={setCounter} />}
          </div>
          <div className="game__info">
            <div className="game__controls">
              <span className="comment">{'// use keyboard'}</span>
              <span className="comment">{'// arrows to play'}</span>
              <div className="game__controls-arrows arrow">
                <span className="arrow__up">
                  <span></span>
                </span>
                <span className="arrow__left">
                  <span></span>
                </span>
                <span className="arrow__down">
                  <span></span>
                </span>
                <span className="arrow__right">
                  <span></span>
                </span>
              </div>
            </div>
            <div className="game__score">
              {'// score'} <span className="score">{counter}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
