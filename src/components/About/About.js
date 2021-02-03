import React from 'react';
import AuthorPhoto from '../../images/author_photo.jpeg';
import './About.css';

export default function About() {
  return(
    <div className="about">
      <img src={AuthorPhoto} className="about__photo" alt="Фото автора"/>
      <div className="about__author">
        <h3 className="about__title">Об авторе</h3>
        <p className="about__text-paragraph">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
        <p className="about__text-paragraph">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
      </div>
    </div>
  );
};
