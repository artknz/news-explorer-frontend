import React from 'react';
import './Footer.css';
import GitHub from '../../images/github.png';
import FB from '../../images/fb.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__powered-by">&#169; 2020 Supersite, Powered by News API</div>
      <div className="footer__links">
        <a href="https://github.com/artknz" className="footer__main" target="_blank" rel="noreferrer">Главная</a>
        <a href="https://praktikum.yandex.ru/" className="footer__yp" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
      </div>
      <a href="https://github.com/artknz" className="footer__github" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" /></a>
      <a href="https://www.facebook.com/" className="footer__fb" target="_blank" rel="noreferrer">
        <img src={FB} alt="fb-link" />
      </a>
    </div>
  );
};
