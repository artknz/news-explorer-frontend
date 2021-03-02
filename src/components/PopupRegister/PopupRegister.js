import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './PopupRegister.css';

export default function PopupRegister({ isOpen, onClose, handleRegister, onAuthClick }) {
  const [ data, setData ] = useState({
    email: '',
    password: '',
    name: ''
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
    const { email, password, name } = data;
    handleRegister(email, password, name)
  }

  return(
    <PopupWithForm
      name='register'
      title='Регистрация'
      buttonText='Зарегистрироваться'
      linkText='Войти'
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onAuthClick={onAuthClick}
    >
      <h4 className="popup__field-name">Email</h4>
      <input id="registeremail" required name="email" placeholder="Введите почту" type="text" value={data.registeremail} onChange={handleChange} className="popup__field popup__field_type_title" />
      {/* <span id="title-input-error" className="popup__field-error" /> */}

      <h4 className="popup__field-name">Пароль</h4>
      <input id="registerpassword" required name="password" type="password" value={data.registerpassword} onChange={handleChange} placeholder="Введите пароль" className="popup__field popup__field_type_link"  />
      {/* <span id="link-input-error" className="popup__field-error" /> */}

      <h4 className="popup__field-name">Имя</h4>
      <input id="registername" required name="name" type="text" value={data.name} onChange={handleChange} placeholder="Введите свое имя" className="popup__field popup__field_type_link" />
      {/* <span id="name-input-error" className="popup__field-error" /> */}
    </PopupWithForm>
  );
};
