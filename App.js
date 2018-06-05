import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


// Pre ES6...
// var FrogSpot = function(props) {
//   return (
//     <Button
//       onPress={function() { alert('hello ' + props.letter) }}
//       title={props.letter}
//       color="#841584"
//     />
//   );
// };

const FrogSpot = ({letter}) => (
  <Button
    onPress={() => alert(`hello ${letter}`)}
    title={letter}
    color="#841584"
  />
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FrogSpot letter="p" />
        <FrogSpot letter="e" />
        <FrogSpot letter="n" />
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
