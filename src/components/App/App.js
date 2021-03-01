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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const[ isPopupAuthOpen, setIsPopupAuthOpen ] = useState(false);
  const[ isPopupRegisterOpen, setIsPopupRegisterOpen ] = useState(false);
  const[ isInfoToolTipOpen, setInfoToolTipOpen ] = useState(false);
  const[ isLoading, setIsLoading ] = useState(false);

  const localCards = JSON.parse(localStorage.getItem('localCards'));
  const[ cards, setCards ] = useState(localCards);
  const[currentUser, setCurrentUser] = useState(CurrentUserContext);
  const [ keyword, setKeyword ] = useState(localStorage.getItem('keyword') || '')

  const[ articles, setArticles] = useState([]);
  const[ loggedIn, setLoggedIn ] = useState(false);
  const[ userData, setUserData ] = useState({
    name: ''
  });
  const history = useHistory();

  useEffect(_ => {
    tokenCheck()
  }, [])

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
    return <Main cards={cards}
    saveCard={(article) => {
      mainApi.addNewCard(article, keyword)
        .then(res => {
          const newCards = cards.map(card => {
            if (card.url === res.data.link) {
              card._id = res.data._id;
            }
            setArticles([res.data, ...articles]);
            return card
          })
          setCards(newCards)
        })
        .catch((err) => console.log(err))
      }}
    deleteCard={(id) => {
      mainApi.deleteArticle(id)
        .then(() => {
          const newCards = cards.filter(card => {
            if (card._id) {
              delete card._id
            }
            return card
          })
          setCards(newCards);
        })
        .catch((err) => console.log(err))
      }}
    />
  }

  function deleteCard(id) {
    mainApi.deleteArticle(id)
    .then(() => {
      const newArticles = articles.filter(article => article._id !== id)
      setArticles(newArticles);
    })
    .catch((err) => console.log(err))
  }

  function searchArticles(keyword) {
    setIsLoading(true)
    newsApi.getArticles(keyword).then(
      (res) => {
        const localCards = JSON.stringify(res.articles)
        localStorage.setItem('localCards', localCards)
        setCards(res.articles);
        const keywordUppercased = keyword[0].toUpperCase() + keyword.slice(1)
        localStorage.setItem('keyword', keywordUppercased)
        setKeyword(keywordUppercased)
      })
      .catch((err) => console.log(err))
      .finally(_ => {
        setIsLoading(false)
      })
  }

  const keywords = articles.reduce((sum, item) => {
    if (!sum[item.keyword]) {
      sum[item.keyword] = 1
      return sum
    }
    sum[item.keyword] = sum[item.keyword] + 1
    return sum
  }, {})

  useEffect(_ => {
    if(loggedIn) {
      function getArticles() {
        mainApi.getArticles().then(
          (data) => {
            setArticles(data)
          })
      }
      getArticles();
      const jwt = localStorage.getItem('jwt')
      mainApi.getUserInfo()
        .then(data => {
          setCurrentUser(data)
        })
        .catch((err) => console.log(err))

      auth.getContent(jwt).then((res) => {
        setUserData({
          name: res.name,
        });
      })
      .catch(err => console.log(err))
    }
  }, [loggedIn]);

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
      localStorage.setItem('jwt', data.token)
      setLoggedIn(true);
      localStorage.removeItem('localCards');
      setArticles([])
      history.push('/');
    })
    .then(res => {
      setIsPopupAuthOpen(false);
    })
    .catch((err) => console.log(err))
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      auth.getContent(jwt).then((res) => {
        if (res.email) {
          setLoggedIn(true);
          history.push('/');
        }
      })
      .catch(err => console.log(err))
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('localCards');
    setArticles([]);
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchForm
            onAuthClick={handleAuthClick}
            searchArticles={searchArticles}
            userData={userData}
            loggedIn={loggedIn}
            handleLogout={handleLogout}
          />
          {defineContent(cards, isLoading)}
          <About />
          <Footer />
        </Route>
        <ProtectedRoute
          exact
          path="/saved-news"
          loggedIn={loggedIn}
          component={SavedNews}
          articles={articles}
          keywords={keywords}
          userData={userData}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
          deleteCard={deleteCard}
        />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
