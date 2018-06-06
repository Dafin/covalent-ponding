import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {chain, find, filter, map} from 'lodash';

const WaterLilly = (isCorrect) => {
  return (
    <View style={styles.waterlilly}> 
      <TouchableOpacity
        onPress={() => alert("Placeholder")}
        color="#aaaaaa"
      ><Text>Hiii</Text>
        </TouchableOpacity>
    </View>
  );

};

const Spot = ({frog, hasFrog, isCorrect, type, handleOnPress}) => {
  return (
    <View style={styles.spot}>
      <Button
        onPress={() => handleOnPress(frog)}
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
          type: 'bank'
        },
        {
          frog: 'p',
          type: 'bank'
        },
        {
          frog: 'n',
          type: 'bank'
        },
        {
          frog: null,
          isCorrect: 'p',
          type: 'pond'
        },
        {
          frog: null,
          isCorrect: 'e',
          type: 'pond'
        },
        {
          frog: null,
          isCorrect: 'n',
          type: 'pond'
        }
      ]
    };

    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress(frog) {
    // if (frog === null) return 
    if (!frog) return
    
    // var spots = this.state.spots;
    const {spots} = this.state;
    let newSpots = [];

    // remove frog from spot that was clicked.
    newSpots = map(spots, spot => {
      if (spot.frog === frog) {
        spot.frog = null;
      }

      return spot;
    });

    // add frog to first available empty spot.
    let found = false;
    newSpots = map(newSpots, spot => {
      if (!spot.frog && !found && spot.type === 'pond') {
        spot.frog = frog;
        found = true;
      }

      return spot;
    });

    this.setState({
      spots: newSpots
    });
  }

  render() {
    const { spots } = this.state;

    return (
      <View style={styles.container}>

        <WaterLilly />

        <View style={styles.pond}>
          { chain(spots)
            .filter(({type}) => type === 'pond')
            .map(({frog, hasFrog, isCorrect, type}, i) => (
              <Spot
                key={i}
                frog={frog}
                hasFrog={hasFrog}
                isCorrect={isCorrect}
                handleOnPress={this.handleOnPress}
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
                handleOnPress={this.handleOnPress}
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
  },
  waterlilly: {
    backgroundColor:'gray',
    minHeight: 50,
    alignSelf: 'flex-end',
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }

});