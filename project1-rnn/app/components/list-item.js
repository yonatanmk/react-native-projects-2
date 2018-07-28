import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
        <Text>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 0.5,
    height: 40,
  },
};

export default ListItem;
