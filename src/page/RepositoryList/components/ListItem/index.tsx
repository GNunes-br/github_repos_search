import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  name: string;
  technology: string;
  defaultBrach: string;
};

const ListItem: React.FC<Props> = ({ name, technology, defaultBrach }) => {
  return (
    <View style={styles.repository}>
      <View>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.body}>{technology}</Text>
      </View>
      <View style={styles.branch}>
        <Text>{defaultBrach}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  repository: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
  },
  branch: {},
  header: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '700',
    color: 'black',
  },
  body: {
    fontSize: 14,
    lineHeight: 24,
  },
});
