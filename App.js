import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {each, chain, find, filter, map, cloneDeep} from 'lodash';
import styles from './styles'

import WaterLilly from './components/waterLily'
import Fish from './components/fish'
import initialState from './utils/initialState'
import Spot from './components/spot'
import ResetButton from './utils/resetButton'


export default class App extends Component {
  constructor(props) {
    super(props);

    Text.defaultProps.style = { fontFamily: 'ChalkboardSE-Bold' }

    this.state = cloneDeep(initialState);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleWin = this.handleWin.bind(this);
  }

  handleReset() {
    this.setState(cloneDeep(initialState));
  }

  handleWin() {
    let score = 0;
    const pondSpots = filter(this.state.spots, spot => spot.type === 'pond');

    each(pondSpots, (spot) => {
      if (spot.frog === spot.isCorrect) {
        score += 1;
      }
    });

    if (score === pondSpots.length) {
      alert('Yay! Yes, you won!');
    } else {
      alert('Oh...');
    }
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

        <ImageBackground style={styles.imgBackground}
                         resizeMode='repeat'
                         resizeMthod='scale'
                         source={require("./images/waterAH.gif")}>

        <Text style={styles.heading}>Covalent Ponding v0.1</Text>
        <Fish />
        <WaterLilly handleWin={this.handleWin} />

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

        <ResetButton handleReset={this.handleReset} />
        </ImageBackground>

      </View>
    );
  }
}