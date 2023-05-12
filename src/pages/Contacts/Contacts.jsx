import { useSelector } from 'react-redux';
import ContactsForm from './ContactsForm';
import Accepted from './Accepted';
import Snippet from './Snippet';
import './style.scss';

function Contacts() {
  const { sentForm } = useSelector((state) => state.contacts);

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
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="tabs__list-item">
              <a
                href="https://t.me/dyachenko_o"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </li>
            <li className="tabs__list-item">
              <a
                href="https://github.com/ODyachenko"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="contacts__content">
        {sentForm ? <Accepted /> : <ContactsForm />}
        <Snippet />
      </div>
    </div>
  );
}

export default Contacts;
