import linkedin from '../../assets/img/linkedIn.svg';
import telegram from '../../assets/img/telegram.svg';
import github from '../../assets/img/gitHub.svg';
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__info">find me in:</span>
      <a
        href="https://www.linkedin.com/in/oleh-diachenko-frontend/"
        target="_blank"
        rel="no-referrer"
        className="footer__link"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://t.me/dyachenko_o"
        target="_blank"
        rel="no-referrer"
        className="footer__link"
      >
        <img src={telegram} alt="Telegram" />
      </a>
      <a
        href="https://github.com/ODyachenko"
        target="_blank"
        rel="no-referrer"
        className="footer__link"
      >
        {/* @username  */}
        <img src={github} alt="GitHub" />
      </a>
    </footer>
  );
}

export default Footer;
