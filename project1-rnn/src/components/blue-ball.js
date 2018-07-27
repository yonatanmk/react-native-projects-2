import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class BlueBall extends Component {

  componentWillMount() {
    console.log('blue ball will mount')
    this.position = new Animated.ValueXY({ x: 200, y: 500 });
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  componentDidMount() {
    console.log('blue ball did mount')
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
    backgroundColor: 'blue',
  }
};

export default BlueBall;
