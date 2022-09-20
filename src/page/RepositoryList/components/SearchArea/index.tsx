import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  searchInputValue: string;
  onChangeSearchInputText: any;
  onSearchButtonPress: () => any;
};

const SearchArea: React.FC<Props> = ({
  searchInputValue,
  onChangeSearchInputText,
  onSearchButtonPress,
}) => {
  return (
    <View style={styles.header}>
      <Text>Busque os repositórios por usuário</Text>
      <TextInput
        placeholder="Usuário do GitHub"
        value={searchInputValue}
        onChangeText={onChangeSearchInputText}
      />
      <Button title="Buscar" onPress={onSearchButtonPress} />
    </View>
  );
};

export default SearchArea;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    marginBottom: 16,
  },
});
