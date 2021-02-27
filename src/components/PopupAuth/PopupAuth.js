import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './PopupAuth.css';

export default function PopupAuth({isOpen, onClose, name, password, onRegisterClick, handleLogin}) {
  const [ data, setData ] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    handleLogin(email, password)
  }

  return(
    <PopupWithForm
      name='auth'
      title='Вход'
      buttonText='Войти'
      linkText='Зарегистрироваться'
      isOpen={isOpen}
      onClose={onClose}
      onRegisterClick={onRegisterClick}
      onSubmit={handleSubmit}

    >
      <h4 className="popup__field-name">Email</h4>
      <input id="emailinput" type="text" value={data.emailinput} onChange={handleChange} placeholder="Введите почту" name="email" minLength="1" maxLength="30" className="popup__field" required />
      {/* <span id="title-input-error" className="popup__field-error" /> */}

      <h4 className="popup__field-name">Пароль</h4>
      <input id="passwordinput" type="password" value={data.passwordinput} onChange={handleChange} placeholder="Введите пароль" name="password" className="popup__field" required />
      {/* <span id="link-input-error" className="popup__field-error" /> */}
    </PopupWithForm>
  );
};
