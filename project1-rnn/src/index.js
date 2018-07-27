import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import store from './store';
import RedBall from './components/red-ball';
import BlueBall from './components/blue-ball';
import List from './components/list';
import Counter from './components/counter';
import FormInput from './components/form-input';

export default class extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      redBall: { screen: RedBall },
      blueBall: { screen: BlueBall },
      list: {
        screen: createStackNavigator({
          list: { screen: List },
          counter: { screen: Counter },
          formInput: { screen: FormInput },
        })
      }
    }, {
      lazy: true,
    });

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
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
