import React from 'react';
// import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';

const App = () => {

  return (
    <div className="App">
      <SearchForm />
      <Main />
    </div>
  );
}

export default App;
