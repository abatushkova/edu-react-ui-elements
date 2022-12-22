import React, { ChangeEvent, FormEvent, useState } from 'react';
import './Form.scss';

interface IStateModel {
  firstName: string;
  username: string;
  email: string;
  phone: string;
}

const initialState: IStateModel = {
  firstName: '',
  username: '',
  email: '',
  phone: '',
};

export const Form = () => {
  const [user, setUser] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('typing');
  const [age, setAge] = useState('junior');

  const handleClickSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClickReset = () => {
    setUser(initialState);
    setAge('junior');
    setSubmitted(false);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    });
  };

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  }

  return (
    <form className="form mb-3" onSubmit={handleClickSubmit}>
      <div className="form__item form__item--action">
        <span className="form__input-label">First Name</span>
        <input type="text" name="firstName"
          value={user.firstName}
          onChange={handleChangeInput}
          className="form__input"
          maxLength={100}
          disabled={submitted}
        />
        <p className="form__info">
          {!user.firstName ? 'Please enter first name' : '*required' }
        </p>
      </div>
      <div className="form__item form__item--action">
        <span className="form__input-label">Username</span>
        <input type="text" name="username"
          value={user.username}
          onChange={handleChangeInput}
          className="form__input"
          maxLength={100}
          disabled={submitted}
        />
        <p className="form__info">
          {status === 'error' ? 'Please enter username' : '*required' }
        </p>
      </div>
      <div className="form__item form__item--action">
        <span className="form__input-label">Email</span>
        <input type="email" name="email"
          value={user.email}
          onChange={handleChangeInput}
          className="form__input"
          maxLength={50}
          disabled={submitted}
        />
        <p className="form__info">
          {status === 'error' ? 'Please enter email' : '*required' }
        </p>
      </div>
      <div className="form__item form__item--action">
        <span className="form__input-label">Phone number</span>
        <input type="tel" name="phone"
          value={user.phone}
          onChange={handleChangeInput}
          className="form__input"
          maxLength={30}
          disabled={submitted}
        />
      </div>
      <div className="form__item form__item--full">
        <p className="subheader">Age</p>
        <label className="form__radio-label">
          <input type="radio" name="age"
            className="form__radio"
            value="junior"
            checked={age === 'junior'}
            onChange={handleChangeRadio}
          />
          &lt;18
        </label>
        <label className="form__radio-label">
          <input type="radio" name="age"
            className="form__radio"
            value="middle"
            checked={age === 'middle'}
            onChange={handleChangeRadio}
          />
          18-35
        </label>
        <label className="form__radio-label">
          <input type="radio" name="age"
            className="form__radio"
            value="senior"
            checked={age === 'senior'}
            onChange={handleChangeRadio}
          />
          35+
        </label>
      </div>
      <div className="form__buttons">
        <button type="submit" className="form__button form__button--filled">
          Submit
        </button>
        <button type="button"
          className="form__button form__button--outlined"
          onClick={handleClickReset}
        >
          Reset
        </button>
      </div>
      {status === 'success' && (
        <div className="form__item form__item--full form__item--success">
          You successfully created account!
        </div>
      )}
    </form>
  );
}
