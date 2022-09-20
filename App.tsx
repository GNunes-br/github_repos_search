import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';

import RepositoryList from './src/page/RepositoryList';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={style.page}>
        <RepositoryList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    flex: 1,
  },
});
