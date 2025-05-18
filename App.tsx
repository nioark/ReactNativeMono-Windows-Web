import Reactotron from 'reactotron-react-native';
import React from 'react';
import {Router} from './src/lib/Router';
import {routes} from './src/Routes';

// only in dev
if (__DEV__) {
  Reactotron.configure({name: 'RN-Windows App', host: 'localhost'}) // point to your machine
    .useReactNative() // add all built‑in react native plugins
    .connect(); // connect!
}

const App = () => {
  return <Router routes={routes} defaultPath="/login" />;
};

export default App;
