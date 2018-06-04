import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload u git me famalam.</Text>
        <Text>Shake your phone to open the developer menu and ting.</Text>
        <Button
          onPress={function() { alert("hello") }}
          title="Thiss"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
