import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// const URL =
//   'https://script.google.com/macros/s/AKfycbxTZvqybpPT1ku8UutCh7xff2RunVpnEVp7H6VkGoeuI_R9Dsun/exec';

function ContactsForm() {
  const [userData, setUserData] = useState({});
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
    reset();
  };

  // useEffect(() => {
  //   axios
  //     .post(URL, userData)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [userData]);

  return (
    <form className="contacts__form form" onSubmit={handleSubmit(onSubmit)}>
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
