import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from '../styles'


export default class WaterLilly extends Component {
  render() {
    return (
      <View style={styles.waterlilly}> 
        <TouchableOpacity
          onPress={this.props.handleWin}
          color="#aaaaaa"
        >
          <Image source={require("../images/lily.png")}/>
        </TouchableOpacity>
      </View>
    );

  }
}



