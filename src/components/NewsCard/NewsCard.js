import React from 'react';
import './NewsCard.css';
import image_04 from "../../images/image_04.png";
import image_07 from "../../images/image_07.png";
import image_08 from "../../images/image_08.png";

export default function NewsCard() {
  return (
    <>
      <div className="news-card">
        <img src={image_04} alt="Растение" className="news-card__image" />
        <button type="button" className="news-card__save" />
        <div className="news-card__publication-date">2 августа, 2019</div>
        <h3 className="news-card__title">Национальное достояние – парки</h3>
        <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
        <p className="news-card__channel">Лента.ру</p>
      </div>

      <div className="news-card">
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
      </div>
    </>
  );
};
