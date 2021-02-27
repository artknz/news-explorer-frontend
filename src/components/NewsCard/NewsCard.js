import React, { useState } from 'react';
import './NewsCard.css';

export default function NewsCard({ urlToImage, channelName, title, text, date, onSave }) {
  const [ marked, setMarked ] = useState(false);

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
        <button onClick={onSave} type="button" className={marked ? `news-card__save news-card__save_active` : `news-card__save`} />
        <div className="news-card__publication-date">{formatted}</div>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__channel">{channelName}</p>
      </div>
    </>
  );
};
