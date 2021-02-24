import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';

export default function Main({ cards }) {
  return (
    <div className="main">
      <NewsCardList
        cards={cards}
      />
    </div>
  );
};
