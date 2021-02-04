import React from 'react';
// import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';

const App = () => {

  return (
    <div className="App">
      <SearchForm />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
