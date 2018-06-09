import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    height: 699,
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
    borderWidth: 1,
    minHeight: 100,
    minWidth: 100,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center'  

  },
  waterlilly: {
    minHeight: 50,
    alignSelf: 'flex-end',
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: null,
    height: null
  }

});
