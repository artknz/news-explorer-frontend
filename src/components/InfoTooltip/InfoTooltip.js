import React from 'react';
import './InfoTooltip.css';

export default function InfoTooltip({ name, isOpen, onClose, onAuthClick}) {
  return(
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <form name={name} className={`popup__container`}>
        <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close popup__close_type_profile" />
        <h3 className="popup__title">Пользователь успешно зарегистрирован!</h3>
        <p className="popup__alt popup__alt_type_tooltip"><button type="button" onClick={onAuthClick} className="popup__route popup__route_type_tooltip">Войти</button></p>
      </form>
    </section>
  );
};
