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

const App = () => {
  const[isPopupAuthOpen, setIsPopupAuthOpen] = useState(false);
  const[isPopupRegisterOpen, setIsPopupRegisterOpen] = useState(false);

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

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchForm
            onAuthClick={handleAuthClick}
          />
          <Main />
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
