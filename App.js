import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {chain, filter, map} from 'lodash';

const Spot = ({frog, hasFrog, isCorrect, type}) => {
  return (
    <View style={styles.spot}>
      <Button
        onPress={() => alert(`I am: ${frog}`)}
        title={frog || ''}
        color="#841584"
      />
    </View>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spots: [
        {
          frog: 'e',
          hasFrog: true,
          type: 'bank'
        },
        {
          frog: 'p',
          hasFrog: true,
          type: 'bank'
        },
        {
          frog: 'n',
          hasFrog: true,
          type: 'bank'
        },
        {
          frog: null,
          isCorrect: 'p',
          hasFrog: false,
          type: 'pond'
        },
        {
          frog: null,
          isCorrect: 'e',
          hasFrog: false,
          type: 'pond'
        },
        {
          frog: null,
          isCorrect: 'n',
          hasFrog: false,
          type: 'pond'
        }
      ]
    };
  }

  render() {
    const { spots } = this.state;

    console.log(spots);

    return (
      <View style={styles.container}>

        <View style={styles.pond}>
          { chain(spots)
            .filter(({type}) => type === 'pond')
            .map(({frog, hasFrog, isCorrect, type}, i) => (
              <Spot
                key={i}
                frog={frog}
                hasFrog={hasFrog}
                isCorrect={isCorrect}
                type={type}
              />
            ))
            .value()
          }
        </View>

        <View style={styles.bank}>
          { chain(spots)
            .filter(({type}) => type === 'bank')
            .map(({frog, hasFrog, isCorrect, type}, i) => (
              <Spot
                key={i}
                frog={frog}
                hasFrog={hasFrog}
                isCorrect={isCorrect}
                type={type}
              />
            ))
            .value()
          }
        </View>
      </View>
    );
  }
}

         // <FrogSpot letter="p" hasFrog={true} isOnBank={true} />
         //  <FrogSpot letter="e" hasFrog={true} isOnBank={true} />
         //  <FrogSpot letter="n" hasFrog={true} isOnBank={true} />



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
    minHeight: 50,
    minWidth: 50,
    margin: 1
  }
});