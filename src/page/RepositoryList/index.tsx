import React, { ReactNode, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getRepos } from '../../store/ducks/repositories/states';
import { ListItem, SearchArea } from './components';

const RepositoryList: React.FC = () => {
  const dispatch = useDispatch();
  const repositoryState = useSelector((state: RootState) => state.repositories);

  const [username, onChangeUsername] = useState('');

  function renderContent(): ReactNode {
    if (repositoryState.loading) {
      return <Text>Carregando...</Text>;
    }

    if (repositoryState.error) {
      return <Text>Algo inesperado aconteceu!</Text>;
    }

    return (
      <>
        <SearchArea
          searchInputValue={username}
          onChangeSearchInputText={onChangeUsername}
          onSearchButtonPress={() => dispatch(getRepos({ username }))}
        />
        <FlatList
          removeClippedSubviews={false}
          data={repositoryState.data.repositories}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item: { name, technology, defaultBrach } }) => (
            <ListItem
              name={name}
              technology={technology}
              defaultBrach={defaultBrach}
            />
          )}
          ListEmptyComponent={() => <></>}
          style={styles.list}
        />
      </>
    );
  }

  return <View style={styles.page}>{renderContent()}</View>;
};

export default RepositoryList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 16,
  },
  list: {
    flex: 1,
    width: '100%',
  },
});
