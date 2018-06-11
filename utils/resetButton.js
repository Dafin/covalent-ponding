import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from '../styles'

export default class ResetButton extends Component {
  render() {
    return (
      <View style={styles.resetButton}> 
        <TouchableOpacity
          onPress={ () => this.props.handleReset() }
          color="#aaaaaa"
        >
          <Image source={require("../images/mouse_hole.png")}/>
        </TouchableOpacity>
      </View>
    );

  }
}


