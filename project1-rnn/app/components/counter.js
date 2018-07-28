import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

import * as actions from '../actions'

const SCREEN_WIDTH = Dimensions.get('window').width;

class Counter extends Component {
  static navigationOptions = {
    title: 'Counter',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>This is the Counter</Text>
        <Text style={styles.centerText}>Count: {this.props.count || 0}</Text>
        <TouchableOpacity style={[styles.button, styles.green]} onPress={() => this.props.incrementCount()}>
          <Text style={styles.centerText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.red]} onPress={() => this.props.decrementCount()}>
          <Text style={styles.centerText}>-1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ count }) => ({
  count,
})

const styles = {
  container: {
    flex: 1,
  },
  button: {
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    alignSelf: 'center',
    width: SCREEN_WIDTH / 4,
  },
  centerText: {
    textAlign: 'center',
  },
  green: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  }
};

export default connect(
  mapStateToProps,
  actions,
)(Counter);
