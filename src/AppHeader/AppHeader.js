// External Dependencies
import React from 'react';
import { Header } from 'react-native-elements';

// Component Definition
const AppHeader = () => {
  return (
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'Reddit Mockup', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
};

export default AppHeader;
