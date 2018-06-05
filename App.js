import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const FrogSpot = (props) => {
  const {letter, hasFrog, isOnBank} = props;

  return (
    <View style={styles.spot}>
      <Button
        onPress={() => alert(`I am: ${letter}`)}
        title={letter}
        color="#841584"
      />
    </View>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pond}>
          <FrogSpot letter="p" hasFrog={false} isOnBank={false} />
          <FrogSpot letter="e" hasFrog={false} isOnBank={false} />
          <FrogSpot letter="n" hasFrog={false} isOnBank={false} />
        </View>

        <View style={styles.bank}>
          <FrogSpot letter="p" hasFrog={true} isOnBank={true} />
          <FrogSpot letter="e" hasFrog={true} isOnBank={true} />
          <FrogSpot letter="n" hasFrog={true} isOnBank={true} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pond: {
    flexDirection: 'row'
  },
  bank: {
    flexDirection: 'row'
  },
  spot: {
    borderWidth: 1,
    margin: 1
  }
});