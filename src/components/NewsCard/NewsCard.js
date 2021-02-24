import React from 'react';
import './NewsCard.css';
import image_04 from "../../images/image_04.png";
// import image_07 from "../../images/image_07.png";
// import image_08 from "../../images/image_08.png";

export default function NewsCard({ urlToImage, channelName, title, text, date }) {
  return (
    <>
      <div className="news-card">
        <img src={urlToImage} alt={channelName} className="news-card__image" />
        <button type="button" className="news-card__save" />
        <div className="news-card__publication-date">{date}</div>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__channel">{channelName}</p>
      </div>

      {/* <div className="news-card">
        <img src={image_07} alt="Растение" className="news-card__image" />
        <button type="button" className="news-card__save" />
        <div className="news-card__publication-date">2 августа, 2019</div>
        <h3 className="news-card__title">Лесные огоньки: история одной фотографии</h3>
        <p className="news-card__text">Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
        из местных чудес природы.</p>
        <p className="news-card__channel">Медуза</p>
      </div>

      <div className="news-card">
        <img src={image_08} alt="Растение" className="news-card__image" />
        <button type="button" className="news-card__save" />
        <div className="news-card_flag">Войдите, чтобы сохранять статьи</div>
        <div className="news-card__publication-date">2 августа, 2019</div>
        <h3 className="news-card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h3>
        <p className="news-card__text">Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...</p>
        <p className="news-card__channel">Риа</p>
      </div> */}
    </>
  );
};
