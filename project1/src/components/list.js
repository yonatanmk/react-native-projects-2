import React, { Component } from 'react';
import { View, ScrollView, Alert } from 'react-native';

import ListItem from './list-item';

class List extends Component {
  static navigationOptions = {
    title: 'List of projects',
  };

  endScrollAlert = () => {
    // Alert.alert('Helloo')
  }

  listItemNavigation = () => {
    this.props.navigation.push('counter')
  }

  render() {
    return (
      <ScrollView onScrollEndDrag={this.endScrollAlert}>
        <ListItem title='Counter' onPress={this.listItemNavigation}/>
      </ScrollView>
    );
  }
}

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black',
  },
  red: {
    flex: 1,
    backgroundColor: 'blue',
  }
};

export default List;
