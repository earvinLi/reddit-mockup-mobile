// External Dependencies
import React from 'react';
import ReduxThunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

// Internal Dependencies
import AppHeader from './src/AppHeader/AppHeader';
import AppReducer from './src/App/AppReducer';
import PostList from './src/PostList/PostList';

// Redux Configuration
const appStore = createStore(AppReducer, applyMiddleware(ReduxThunk));

// Component Definition
const App = () => {
  return (
    <Provider store={appStore}>
      <View style={styles.container}>
        <AppHeader />
        <PostList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
