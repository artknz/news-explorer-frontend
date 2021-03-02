import React from 'react';
import './Preloader.css';

export default function Preloader() {
  return(
    <div className="circle-preloader">
      <div className="circle-preloader__animation" />
      <p className="circle-preloader__text">Идет поиск новостей...</p>
    </div>
  );
};
