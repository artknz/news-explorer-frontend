import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './PopupRegister.css';

export default function PopupRegister({name, isOpen, onClose}) {
  return(
    <PopupWithForm
      name='register'
      title='Регистрация'
      buttonText='Зарегистрироваться'
      linkText='Войти'
      onClose={onClose}
      isOpen={isOpen}
    >
      <h4 className="popup__field-name">Email</h4>
      <input id="title-input" type="text" value={name} onChange={''} placeholder="Введите почту" name="name" minLength="1" maxLength="30" className="popup__field popup__field_type_title" required />
      <span id="title-input-error" className="popup__field-error" />

      <h4 className="popup__field-name">Пароль</h4>
      <input id="link-input" type="url" value={''} onChange={''} placeholder="Введите пароль" name="link" className="popup__field popup__field_type_link" required />
      <span id="link-input-error" className="popup__field-error" />

      <h4 className="popup__field-name">Имя</h4>
      <input id="name-input" type="url" value={''} onChange={''} placeholder="Введите свое имя" name="link" className="popup__field popup__field_type_link" required />
      <span id="name-input-error" className="popup__field-error" />
    </PopupWithForm>
  );
};
