import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './PopupAuth.css';

export default function PopupAuth({isOpen, onClose, name, password, onRegisterClick}) {
  return(
    <PopupWithForm
      name='auth'
      title='Вход'
      buttonText='Войти'
      linkText='Зарегистрироваться'
      isOpen={isOpen}
      onClose={onClose}
      onRegisterClick={onRegisterClick}
    >
      {/* <h4 className="popup__field-name">Email</h4>
      <input id="email-input" type="text" value={name} onChange={isOpen} placeholder="Введите почту" name="name" minLength="1" maxLength="30" className="popup__field" required />
      <span id="title-input-error" className="popup__field-error" />

      <h4 className="popup__field-name">Пароль</h4>
      <input id="password-input" type="url" value={password} onChange={isOpen} placeholder="Введите пароль" name="link" className="popup__field" required />
      <span id="link-input-error" className="popup__field-error" /> */}
    </PopupWithForm>
  );
};
