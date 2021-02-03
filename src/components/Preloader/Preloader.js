import React from 'react';
import './Preloader.css';
import NotFound from '../../images/not-found_v1.png';

export default function Preloader() {
  return(
    <div className="circle-preloader">
      <img src={NotFound} alt="Ничего не найдено" className="circle-preloader__not-found" />
      <h5 className="circle-preloader__title">Ничего не найдено</h5>
      <p className="circle-preloader__sorry">К сожалению по вашему запросу ничего не найдено.</p>
      <div className="circle-preloader__animation" />
      <p className="circle-preloader__text">Идет поиск новостей...</p>
    </div>
  );
};
