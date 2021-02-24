import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupAuth from '../PopupAuth/PopupAuth';
import PopupRegister from '../PopupRegister/PopupRegister';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import NewsApi from '../../utils/NewsApi';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

const defineContent = (cards, isLoading) => {
  if (isLoading) {
    return <Preloader isOpen={true} />
  }
  if (cards === null) {
    return null
  }
  if (cards.length === 0) {
    return <NotFound />
  }
  return <Main cards={cards} />
}

function App() {
  const[ isPopupAuthOpen, setIsPopupAuthOpen ] = useState(false);
  const[ isPopupRegisterOpen, setIsPopupRegisterOpen ] = useState(false);
  const[ isLoading, setIsLoading ] = useState(false);
  const[ cards, setCards ] = useState(null);

  function handleAuthClick() {
    setIsPopupAuthOpen(true);
  }

  function handleRegisterClick() {
    setIsPopupRegisterOpen(true);
  }

  function closeAllPopups() {
    setIsPopupAuthOpen(false);
    setIsPopupRegisterOpen(false);
  }

  function searchArticles(keyword) {
    setIsLoading(true)
    NewsApi.getArticles(keyword).then(
      (res) => {
        setCards(res.articles);
      })
      .catch((err) => console.log(err))
      .finally(_ => {
        setIsLoading(false)
      })
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchForm
            onAuthClick={handleAuthClick}
            searchArticles={searchArticles}
          />
          {defineContent(cards, isLoading)}
          <About />
          <Footer />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>

      <PopupAuth
        isOpen={isPopupAuthOpen}
        onClose={closeAllPopups}
        onRegisterClick={handleRegisterClick}
      />
      <PopupRegister
        isOpen={isPopupRegisterOpen}
        onClose={closeAllPopups}
      />
      <InfoTooltip />
    </div>
  );
}

export default App;
