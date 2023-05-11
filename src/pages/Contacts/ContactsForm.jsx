import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const URL =
  'https://script.google.com/macros/s/AKfycbxySAellCpL_thrrq_rPvoHi2BAyZVYZs4JQIVTdui7jV6_P7qHp7cb5iQx-OdbMISoTw/exec';

function ContactsForm() {
  const [userData, setUserData] = useState({});
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
    setUserData(data);
    isSubmited.current = true;
    reset();
  };

  useEffect(() => {
    if (isSubmited.current) {
      fetch(URL, {
        method: 'POST',
        cors: 'no-cors',
        body: userData,
      })
        .then((res) => console.log('Success: ', res))
        .catch((err) => console.error(err));

      console.log(userData);
    }
  }, [userData]);

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
          name="name"
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
        />
        {errors?.name && (
          <span className="form__error">{errors?.name?.message}</span>
        )}
      </label>
      <label className="form__label">
        <span className="form__label--name">_email:</span>
        <input
          className="form__field"
          name="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/,
              message: 'Email must be of type test@domen.com',
            },
          })}
        />
        {errors?.email && (
          <span className="form__error">{errors?.email?.message}</span>
        )}
      </label>
      <label className="form__label">
        <span className="form__label--name">_message:</span>
        <textarea
          className="form__field form__field--message"
          name="message"
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
        ></textarea>
        {errors?.message && (
          <span className="form__error">{errors?.message?.message}</span>
        )}
      </label>
      <button className="form__btn" type="submit">
        submit-message
      </button>
    </form>
  );
}

export default ContactsForm;
