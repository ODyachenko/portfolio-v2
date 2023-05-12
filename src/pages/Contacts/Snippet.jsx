import { useSelector } from 'react-redux';
import { currentDate } from '../../utils/getCurrentDate';

function Snippet() {
  const { nameValue, emailValue, messageValue } = useSelector(
    (state) => state.contacts
  );

  return (
    <div className="contacts__snippet">
      <ol className="contacts__snippet-list">
        <li>
          <span className="pink">const</span>&nbsp;
          <span className="purple">button = document.querySelector</span>
          {'("#sendBtn");'}
        </li>
        <li>
          {' '}
          <br />
        </li>
        <li>
          <span className="pink">const</span>&nbsp;
          <span className="purple">message</span>
          {'= {'}
        </li>
        <li>
          <span className="purple">name:</span>&nbsp;{`"${nameValue}",`}
        </li>
        <li>
          <span className="purple">email:</span>&nbsp;
          {`"${emailValue}",`}
        </li>
        <li>
          <span className="purple">message:</span>&nbsp;
          {`"${messageValue}",`}
        </li>
        <li>
          <span className="purple">date:</span>&nbsp;{`"${currentDate}"`}
        </li>
        <li>{'}'}</li>
        <li>
          {' '}
          <br />
        </li>
        <li>
          <span className="purple">button.addEventListener</span>
          {'("click", () => {'}
        </li>
        <li>
          <span className="purple">form.send(message)</span>
          {';'}
        </li>
        <li>{'})'}</li>
      </ol>
    </div>
  );
}

export default Snippet;
