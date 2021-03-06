import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class RedBall extends Component {

  componentWillMount() {
    console.log('red ball will mount')
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  componentDidMount() {
    console.log('red ball did mount')
  }

  render() {
    return (
      <View style={styles.red}>
        <Animated.View style={this.position.getLayout()}>
          <View style={styles.ball} />
        </Animated.View>
      </View>
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
    backgroundColor: 'red',
  }
};

export default RedBall;
