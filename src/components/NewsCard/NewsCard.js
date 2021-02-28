import React, { useState, useEffect } from 'react';
import { useLocation }  from 'react-router-dom';
import './NewsCard.css';

export default function NewsCard({ urlToImage, channelName, title, text, date, onSave, id, onDelete }) {
  const location = useLocation();

  function handleButton() {
    if (location.pathname === '/saved-news') {
      return <button onClick={onDelete} type="button" className={'news-card__delete'} />
    }
    return <button onClick={id ? onDelete : onSave} type="button" className={id ? `news-card__save_active` : `news-card__save`} />
  }

  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const formatted = newDate.toLocaleDateString('ru-RU', options);

  return (
    <>
      <div className="news-card">
        <img src={urlToImage} alt={channelName} className="news-card__image" />
        {handleButton()}
        <div className="news-card__publication-date">{formatted}</div>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__channel">{channelName}</p>
      </div>
    </>
  );
};
