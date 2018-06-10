import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import RedBall from './red-ball';
import BlueBall from './blue-ball'

export default class extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      redBall: { screen: RedBall },
      blueBall: { screen: BlueBall },
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
