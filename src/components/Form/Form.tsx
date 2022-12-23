import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Preloader } from '../Preloader/Preloader';
import { submitForm } from '../../utils/helpers/submitForm';
import './Form.scss';

interface IStateModel {
  firstName: string;
  username: string;
  email: string;
  phone: string;
  age: string;
}

const initialState: IStateModel = {
  firstName: '',
  username: '',
  email: '',
  phone: '',
  age: 'junior',
};

export const Form = () => {
  const [user, setUser] = useState(initialState);
  const [status, setStatus] = useState('typing');

  const handleClickSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.firstName || !user.username || !user.email) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    await submitForm();
    setStatus('success');
  };

  const handleClickReset = () => {
    setUser(initialState);
    setStatus('typing');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    });
  };

  if (status === 'success') {
    return (
      <div className="form-success mb-3">
        <p className="subheader">
          You successfully created an account!
        </p>
      </div>
    );
  }

  return (
    <form className="form mb-3" onSubmit={handleClickSubmit}>
      <div className="form__item form__item--action">
        <input type="text" name="firstName"
          className="form__input"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
          maxLength={100}
          disabled={status === 'submitting'}
        />
        {status === 'error' && !user.firstName
          ? <p className="form__info form__info--error">Please enter your name</p>
          : <p className="form__info">*required</p>
        }
      </div>
      <div className="form__item form__item--action">
        <input type="text" name="username"
          className="form__input"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          maxLength={100}
          disabled={status === 'submitting'}
        />
        {status === 'error' && !user.username
          ? <p className="form__info form__info--error">Please enter your username</p>
          : <p className="form__info">*required</p>
        }
      </div>
      <div className="form__item form__item--action">
        <input type="email" name="email"
          className="form__input"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          maxLength={50}
          disabled={status === 'submitting'}
        />
        {status === 'error' && !user.email
          ? <p className="form__info form__info--error">Please enter your email</p>
          : <p className="form__info">*required</p>
        }
      </div>
      <div className="form__item form__item--action">
        <input type="tel" name="phone"
          className="form__input"
          placeholder="Phone number"
          value={user.phone}
          onChange={handleChange}
          maxLength={15}
          disabled={status === 'submitting'}
        />
      </div>
      <div className="form__item form__item--full">
        <p className="subheader">Age</p>
        <label className="form__radio-label">
          <input type="radio" name="age"
            className="form__radio"
            value="junior"
            checked={user.age === 'junior'}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          &lt;18
        </label>
        <label className="form__radio-label">
          <input type="radio" name="age"
            className="form__radio"
            value="middle"
            checked={user.age === 'middle'}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          18-35
        </label>
        <label className="form__radio-label">
          <input type="radio" name="age"
            className="form__radio"
            value="senior"
            checked={user.age === 'senior'}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
          35+
        </label>
      </div>
      <div className="form__buttons">
        <button
          type="submit"
          className="form__button form__button--filled"
          disabled={status === 'submitting'}
        >
          Submit
        </button>
        <button type="button"
          className="form__button form__button--outlined"
          onClick={handleClickReset}
          disabled={status === 'submitting'}
        >
          Reset
        </button>
      </div>
      {status === 'submitting' && (
        <Preloader />
      )}
    </form>
  );
}
