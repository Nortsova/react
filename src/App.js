import React from 'react';

import FormContainer from './containers/FormContainer';
import ListContainer from './containers/ListContainer';

const App = () => (
  <div className="app">
    <h1>todo list</h1>
    <FormContainer />
    <ListContainer />
  </div>);

export default App;
