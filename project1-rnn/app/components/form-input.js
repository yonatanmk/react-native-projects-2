import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native';

import * as actions from '../actions'

const SCREEN_WIDTH = Dimensions.get('window').width;

class FormInput extends Component {
  static navigationOptions = {
    title: 'Form Input',
  };

  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>{this.props.formInput}</Text>
        <Text style={styles.centerText}>{this.state.text || "This will reflect your input in real time"}</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type here!"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.setFormInput(this.state.text)}>
          <Text style={styles.centerText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = ({ formInput }) => ({
  formInput,
})

const styles = {
  // container: {
  //   flex: 1,
  // },
  button: {
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 0.5,
    padding: 10,
    alignSelf: 'center',
    width: SCREEN_WIDTH / 4,
    backgroundColor: '#AAA',
  },
  centerText: {
    textAlign: 'center',
  },
  // green: {
  //   backgroundColor: 'green',
  // },
  // red: {
  //   backgroundColor: 'red',
  // }
};

export default connect(
  mapStateToProps,
  actions,
)(FormInput);
