import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SearchForm />
          <Main />
          <About />
          <Footer />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
