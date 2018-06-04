import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={function() { alert("hello") }}
          title="p"
          color="#841584"
        />
        <Button
          onPress={function() { alert("hello") }}
          title="e"
          color="#841584"
        />
        <Button
          onPress={function() { alert("hello") }}
          title="n"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
