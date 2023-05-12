import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PacmanLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import {
  setNameValue,
  setEmailValue,
  setMessageValue,
  setSentForm,
  setUserData,
  postFeedback,
} from '../../redux/contactsSlice';

function ContactsForm() {
  const { nameValue, emailValue, messageValue, userData } = useSelector(
    (state) => state.contacts
  );
  const dispatch = useDispatch();
  const isSubmited = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    dispatch(setUserData(data));
    isSubmited.current = true;
    reset();
    dispatch(setNameValue(''));
    dispatch(setEmailValue(''));
    dispatch(setMessageValue(''));
  };

  async function postData() {
    dispatch(postFeedback(userData));
  }

  useEffect(() => {
    if (isSubmited.current) {
      postData();
      dispatch(setSentForm(true));
      isSubmited.current = false;
    }
  }, [isSubmited.current]);

  return (
    <form
      className="contacts__form form"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="form__label">
        <span className="form__label--name">_name:</span>
        <input
          className="form__field"
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be greater than 2 characters',
            },
            maxLength: {
              value: 50,
              message: 'Name must be less than 50 characters',
            },
          })}
          value={nameValue}
          onChange={(event) => dispatch(setNameValue(event.target.value))}
        />
        {errors?.name && (
          <span className="form__error">{errors?.name?.message}</span>
        )}
      </label>
      <label className="form__label">
        <span className="form__label--name">_email:</span>
        <input
          className="form__field"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/,
              message: 'Email must be of type test@domen.com',
            },
          })}
          value={emailValue}
          onChange={(event) => dispatch(setEmailValue(event.target.value))}
        />
        {errors?.email && (
          <span className="form__error">{errors?.email?.message}</span>
        )}
      </label>
      <label className="form__label">
        <span className="form__label--name">_message:</span>
        <textarea
          className="form__field form__field--message"
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be greater than 10 characters',
            },
            maxLength: {
              value: 600,
              message: 'Message must be less than 600 characters',
            },
          })}
          value={messageValue}
          onChange={(event) => dispatch(setMessageValue(event.target.value))}
        ></textarea>
        {errors?.message && (
          <span className="form__error">{errors?.message?.message}</span>
        )}
      </label>
      <button className={`form__btn`} type="submit">
        {isSubmited.current ? (
          <PacmanLoader color="#36d7b7" />
        ) : (
          'submit-message'
        )}
      </button>
    </form>
  );
}

export default ContactsForm;
