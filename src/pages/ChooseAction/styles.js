import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#250048',
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 175,
    height: 62,
    resizeMode: 'stretch',
  },
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCreateAccount: {
    width: 318,
    height: 42,
    borderRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: '#FFF',
  },
  textCreateAccount: {
    fontSize: 14,
    fontStyle: 'normal',
    color: '#333333',
  },
  buttonAccessAccount: {
    width: 318,
    height: 42,
    borderRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    elevation: 2,
    backgroundColor: '#00C1EB',
  },
  textAccessAccount: {
    fontSize: 14,
    fontStyle: 'normal',
    color: '#FFF',
  },
});

export default styles;
