import ContactsForm from './ContactsForm';
import Snippet from './Snippet';
import './style.scss';

function Contacts() {
  return (
    <div className="contacts">
      <ul className="contacts__tabs tabs">
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
        <li className="tabs__item">
          <span className="tabs__caption">find-me-also-in</span>
          <ul className="tabs__list tabs__list--social">
            <li className="tabs__list-item">
              <a
                href="https://www.linkedin.com/in/oleh-diachenko-frontend/"
                target="_blank"
                rel="no-referrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="tabs__list-item">
              <a
                href="https://t.me/dyachenko_o"
                target="_blank"
                rel="no-referrer"
              >
                Telegram
              </a>
            </li>
            <li className="tabs__list-item">
              <a
                href="https://github.com/ODyachenko"
                target="_blank"
                rel="no-referrer"
              >
                GitHub
              </a>
            </li>
            {/* <li className="tabs__list-item">
              <a href="" target="_blank" rel="no-referrer">
                Instagram
              </a>
            </li> */}
          </ul>
        </li>
      </ul>
      <ContactsForm />
      {/* <Snippet /> */}
    </div>
  );
}

export default Contacts;
