import { useDispatch } from 'react-redux';
import { setSentForm } from '../../redux/contactsSlice';

function Accepted() {
  const dispatch = useDispatch();

  return (
    <div className="contacts__accepted">
      <h2 className="contacts__accepted-title">Thank you! 🤘</h2>
      <p className="contacts__accepted-text">
        Your message has been accepted. You will recieve answer really soon!
      </p>
      <button
        onClick={() => dispatch(setSentForm(false))}
        className="contacts__accepted-btn"
      >
        send-new-message
      </button>
    </div>
  );
}

export default Accepted;
