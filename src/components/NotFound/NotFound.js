import React from 'react';
import './NotFound.css';
import NotFoundImage from '../../images/not-found_v1.png';

export default function NotFound() {
  return(
    <div className="preloader">
      <img src={NotFoundImage} alt="Ничего не найдено" className="preloader__not-found" />
      <h5 className="preloader__title">Ничего не найдено</h5>
      <p className="preloader__sorry">К сожалению по вашему запросу ничего не найдено.</p>
    </div>
  );
};
