import {StyleSheet, Dimensions} from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_WIDTH = window.width;
export const IMAGE_HEIGHT = window.height;
export const IMAGE_WIDTH_SMALL = window.width / 7;
export const IMAGE_HEIGHT_SMALL = window.height / 7;

export default StyleSheet.create({
  container: {
    backgroundColor: '#26008D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    resizeMode: 'cover',
    flex: 1,
    marginTop: 20,
  },
  register: {
    marginBottom: 20,
    width: window.width - 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#ffae',
  },
  forgotPassword: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 30,
    alignItems: 'flex-end',
  },
  createAccount: {
    height: 30,
  },
  normalContainer: {
    height: 20,
  },
  normalText: {
    color: '#47D9CA',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  createText: {
    color: '#FFFF',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  forgotText: {
    color: '#47D9CA',
    fontSize: 12,
    textAlign: 'center',
    width: 300,
  },
  welcome: {
    fontSize: 20,
    color: '#FFFFFF',
    paddingBottom: 30,
    //letterSpacing: 1,
  },
  button: {
    width: 150,
    borderColor: '#4EEACF',
    borderWidth: 5,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#4EEACF',
    justifyContent: 'center',

    //shadowColor: '#4EEACF',
    //shadowOffset: {
    //  width: 0,
    //  height: 4,
    //},
    //shadowRadius: 5,
    //shadowOpacity: 0.8,
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emailContainer: {
    width: 360,
    borderColor: '#9481C7',
    borderBottomWidth: 1,
    backgroundColor: '#310D93',
    padding: 10,
    //height: 50,
    //borderTopLeftRadius: 4,
    //borderTopRightRadius: 4,
    //borderBottomLeftRadius: 0,
    //borderBottomRightRadius: 0,
  },
  passwordContainer: {
    marginTop: 20,
    width: 360,
    borderColor: '#9481C7',
    borderBottomWidth: 1,
    backgroundColor: '#310D93',
    padding: 10,
    //height: 50,
    //borderTopLeftRadius: 0,
    //borderTopRightRadius: 0,
    //borderBottomLeftRadius: 4,
    //borderBottomRightRadius: 4,
  },
  iniciaCon: {
    marginTop: 10,
    marginBottom: 10,
    color: '#FFFF',
  },
});
