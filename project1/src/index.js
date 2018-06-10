import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Ball from './ball'

export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
