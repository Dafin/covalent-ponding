import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1334,
    width: 320
  },
  
  pond: {
    flexDirection: 'row',
    backgroundColor: 'aqua',

  },
  bank: {
    flexDirection: 'row',
    backgroundColor: 'yellow'

  },
  spot: {
    borderWidth: 0.5,
    minHeight: 100,
    minWidth: 100,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed'
  },
  waterlilly: {
    minHeight: 50,
    alignSelf: 'flex-end',
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 70,
    top: -65,
    right: 15


  },
  fish: {
    minHeight: 100,
    minWidth: 100,
    alignSelf: 'flex-start',
    maxHeight: 50,
    top: 50,
    left: 30


  },
  imgBackground: {
    width: null,
    height: null,
    flex: 1  
  },
  resetButton: {
    minHeight: 50,
    minWidth: 50,
    alignSelf:'flex-end',
    bottom: -125
  },

  heading: {
    fontFamily: 'ChalkboardSE-Bold',
    top: 24,
    textAlign: 'center',
    color:'white',
    textShadowColor:'black',
    textShadowRadius: 9,
    textShadowOffset: {width: -6, height: 4}
  }

});
