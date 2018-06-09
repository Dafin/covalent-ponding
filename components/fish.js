import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import styles from '../styles'


export default class Fish extends Component {
  render() {
    return (
      <View style={styles.fish}> 
        <TouchableOpacity
          onPress={() => alert("Placeholder")}
          color="#aaaaaa"
        >
          <Image source={require("../images/fish.png")}/>
        </TouchableOpacity>
      </View>
    );
  }
}