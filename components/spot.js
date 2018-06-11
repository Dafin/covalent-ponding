import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button
} from 'react-native';
import styles from '../styles'

class Spot extends Component {
  render () {
    const {frog, hasFrog, isCorrect, type, handleOnPress} = this.props

    return (
      <View style={styles.spot}>
        <Button
          onPress={() => handleOnPress(frog)}
          title={frog || ''}
        />
      </View>
    );
  }
}

export default Spot