import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  containerLogo: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 175,
    height: 62,
    resizeMode: 'stretch',
  },

  containerInputsAndLink: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 318,
    height: 46,
    borderRadius: 46,
    marginTop: 15,
    paddingLeft: 27,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  icon: {
    width: 17,
    height: 15,
    resizeMode: 'stretch',
  },
  textInput: {
    height: 52,
    paddingLeft: 12,
    fontSize: 14,
    color: '#333333',
  },

  containerLink: {
    width: 318,
    height: 46,
    alignItems: 'flex-end',
  },

  linkText: {
    paddingTop: 10,
    color: '#00C1EB',
  },

  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonAccess: {
    width: 318,
    height: 42,
    borderRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    elevation: 2,
    backgroundColor: '#00C1EB',
  },

  buttonDisable: {
    width: 318,
    height: 42,
    borderRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    elevation: 2,
    backgroundColor: '#E0E0E0',
  },
  textAccess: {
    fontSize: 14,
    fontStyle: 'normal',
    color: '#250048',
  },

  textAccessDisable: {
    fontSize: 14,
    fontStyle: 'normal',
    color: '#BDBDBD',
  },
});

export default styles;
