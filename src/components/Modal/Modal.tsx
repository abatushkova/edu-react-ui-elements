import React, { useState } from 'react';
import './Modal.scss';

export const Modal = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClickOpen = () => {
    setIsActive(true);
  };

  const handleClickClose = () => {
    setIsActive(false);
  };

  return (
    <div className="modal mb-3">
      {isActive ? (
        <div
          className={`${isActive ? "modal__overlay modal__overlay--opened" : "modal__overlay"}`}
          onClick={handleClickClose}
        >
          <div
            className={`${isActive ? "modal__box modal__box--opened" : "modal__box"}`}
            onClick={e => e.stopPropagation()}
          >
            <p className="modal__text">Scandinavia is a subregion in Northern Europe, with strong historical, cultural, and linguistic ties between its constituent peoples. In English usage, Scandinavia most commonly refers to Denmark, Norway, and Sweden.</p>
            <button
              type="button"
              onClick={handleClickClose}
              className="modal__button modal__button-close"
            >
              <span className="visually-hidden">Close modal</span>
              <span className="modal__icon">
                <svg className="modal__icon-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
              </span>
            </button>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        className="modal__button modal__button-open"
        onClick={handleClickOpen}
      >
        Open
      </button>
    </div>
  );
}
