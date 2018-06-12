import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      region: {
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09,
      },
      mapLoaded: false,
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  onRegionChangeComplete = region => {
    // console.log(region)
    this.setState({ region })
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck');
    });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <MapView
          style={{ flex: 1 }}
          region={ this.state.region }
          onRegionChangeComplete={ this.onRegionChangeComplete }
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search This Area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    )

    // return (
    //   <View style={{ flex: 1, justifyContent: 'center' }}>
    //     <MapView
    //       style={{ flex: 1 }}
    //       region={ this.state.region }
    //       onRegionChangeComplete={ this.onRegionChangeComplete }
    //     />
    //     <View style={styles.buttonContainer}>
    //       <Button
    //         large
    //         title="Search This Area"
    //         backgroundColor="#009688"
    //         icon={{ name: 'search' }}
    //         onPress={this.onButtonPress}
    //       />
    //     </View>
    //   </View>
    // )
  }
}

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
}

export default connect(null, actions)(MapScreen);
