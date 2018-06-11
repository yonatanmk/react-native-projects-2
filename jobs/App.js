import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, TabNavigator, createStackNavigator } from 'react-navigation';

import AuthScreen from './src/AuthScreen';
import WelcomeScreen from './src/WelcomeScreen';
import MapScreen from './src/MapScreen';
import DeckScreen from './src/DeckScreen';
import ReviewScreen from './src/ReviewScreen';
import SettingsScreen from './src/SettingsScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen },
            })
          }
        })
      }
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
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
