import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <Header />
  );
};

AppRegistry.registerComponent('albums', () => App);
