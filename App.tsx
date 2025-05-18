import React from 'react';
import {Router} from './src/lib/Router';
import {routes} from './src/Routes';

const App = () => {
  return <Router routes={routes} defaultPath="/login" />;
};

export default App;
