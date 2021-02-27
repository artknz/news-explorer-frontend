import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupAuth from '../PopupAuth/PopupAuth';
import PopupRegister from '../PopupRegister/PopupRegister';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/Auth';

function App() {
  const[ isPopupAuthOpen, setIsPopupAuthOpen ] = useState(false);
  const[ isPopupRegisterOpen, setIsPopupRegisterOpen ] = useState(false);
  const[ isInfoToolTipOpen, setInfoToolTipOpen ] = useState(false);
  const[ isLoading, setIsLoading ] = useState(false);

  const localCards = JSON.parse(localStorage.getItem('localCards'));
  const[ cards, setCards ] = useState(localCards);

  const [ articles, setArticles] = useState(null);
  const[ loggedIn, setLoggedIn ] = useState(false);
  const[ userData, setUserData ] = useState({
    name: ''
  });
  
  const history = useHistory();

  function handleAuthClick() {
    setIsPopupAuthOpen(true);
  }

  function handleAuthClick() {
    setIsPopupAuthOpen(true);
    setIsPopupRegisterOpen(false);
    setInfoToolTipOpen(false);
  }

  function handleRegisterClick() {
    setIsPopupRegisterOpen(true);
    setIsPopupAuthOpen(false);
  }

  function closeAllPopups() {
    setIsPopupAuthOpen(false);
    setIsPopupRegisterOpen(false);
    setInfoToolTipOpen(false);
  }

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
    return <Main cards={cards} saveCard={_ => {
      mainApi.addNewCard({
        keyword: article.title,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage
      })
      .then(res => {
        console.log(res)
        // const newCards = cards.map(card => {
        //   if (card.url === res.link) {
        //     card._id = res._id;
        //   }
        //   return card
        // })
        // setCards(newCards)
      })
      .catch((err) => console.log(err))
    }} />
  }

  function searchArticles(keyword) {
    setIsLoading(true)
    newsApi.getArticles(keyword).then(
      (res) => {
        const localCards = JSON.stringify(res.articles)
        localStorage.setItem('localCards', localCards)
        setCards(res.articles);
      })
      .catch((err) => console.log(err))
      .finally(_ => {
        setIsLoading(false)
      })
  }

  useEffect(_ => {
    function getArticles() {
      mainApi.getArticles().then(
        (data) => {
          setArticles(data)
        }
      )
    }
    getArticles();
  }, [])

  const handleRegister = (email, password, name) => {
    auth.register(email, password, name)
      .then(data => {
        setUserData({
          email: data.email,
          password: data.password,
          name: data.name
        });
        history.push('/');
      })
      .then(res => {
        setIsPopupRegisterOpen(false);
        setInfoToolTipOpen(true);
      })
      .catch((err) => console.log(err))
  }

  const handleLogin = (email, password) => {
    auth.authorize(email, password)
    .then(data => {
      console.log(data.token)
      localStorage.setItem('jwt', data.token)
      setLoggedIn(true);
      history.push('/');
    })
    .then(res => {
      setIsPopupAuthOpen(false);
    })
    .catch((err) => console.log(err))
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
          <SavedNews articles={articles} />
        </Route>
      </Switch>

      <PopupAuth
        isOpen={isPopupAuthOpen}
        onClose={closeAllPopups}
        onRegisterClick={handleRegisterClick}
        handleLogin={handleLogin}
      />
      <PopupRegister
        isOpen={isPopupRegisterOpen}
        onClose={closeAllPopups}
        handleRegister={handleRegister}
        onAuthClick={handleAuthClick}
      />
      <InfoTooltip
        isOpen={isInfoToolTipOpen}
        onClose={closeAllPopups}
        onAuthClick={handleAuthClick}
      />
    </div>
  );
}

export default App;
