import React from 'react';
import './InfoTooltip.css';

export default function InfoTooltip({ name, isOpen, onClose}) {
  return(
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <form name={name} onSubmit={''} className={`popup__container`}>
        <button onClick={''} type="button" aria-label="Закрыть" className="popup__close popup__close_type_profile" />
        <h3 className="popup__title">Пользователь успешно зарегистрирован!</h3>
        <p className="popup__alt popup__alt_type_tooltip"><a className="popup__route popup__route_type_tooltip" href="www">Войти</a></p>
      </form>
    </section>
  );
};
