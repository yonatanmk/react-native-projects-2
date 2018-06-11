import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from './components/Slides'

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {

  onSlidesComplete = () => { //arrow func means you dont have to bind this when passing to child prop
    this.props.navigation.navigate('auth') //if screen component is rendered by navigator from react-navigation then screen component will have navigation prop
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    )
  }
}

export default WelcomeScreen;
