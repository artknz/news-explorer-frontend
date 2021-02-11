import React from 'react';
import './PopupWithForm.css';

export default function PopupWithForm({name, title, isOpen, onClose, onRegisterClick, onSubmit, buttonText, linkText, children}) {
  return(
    <section className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <form name={name} onSubmit={onSubmit} className={`popup__container popup__container_form popup_container_type_${name}`}>
        <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close popup__close_type_profile" />
        <h3 className="popup__title">{title}</h3>
        {children}
        <button type="submit" className="popup__save popup__save_type_add">{buttonText}</button>
        <p className="popup__alt">или <button type="button" onClick={onRegisterClick} className="popup__route">{linkText}</button></p>
      </form>
    </section>
  );
};
