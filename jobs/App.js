import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export default class App extends React.Component {
  render() {
    const { persistor, store } = configureStore();
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
            }),
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => {
                return <Icon name="favorite" size={30} color={tintColor} />;
              },
            },
          }
        }, {
          // tabBarPosition: 'bottom',
          // swipeEnabled: false,
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false,
      },
      lazy: true,
    });

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <MainNavigator />
          </View>
        </PersistGate>
      </Provider>
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
