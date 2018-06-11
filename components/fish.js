import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Constants, Audio } from 'expo';
import styles from '../styles'


export default class Fish extends Component {
  render() {
    return (
      <View style={styles.fish}> 
        <TouchableOpacity
          onPress={async () => {
            const source = require('../audio/uk-PIN.mp3');
            
            try {
              await Audio.setIsEnabledAsync(true);
              const sound = new Audio.Sound();
              await sound.loadAsync(source);
              await sound.playAsync(); 
            } catch(error) {
              console.error(error);
            }
          }}
          color="#aaaaaa"
        >
          <Image source={require("../images/fish.png")}/>
        </TouchableOpacity>
      </View>
    );
  }
}