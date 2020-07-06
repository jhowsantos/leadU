import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImage: {
    flex: 1,
    width: 331,
    height: 265,
    paddingHorizontal: 15,
    paddingTop: 68,
  },
  containerInfos: {
    flex: 1,
    paddingHorizontal: 29,
  },
  image: {
    width: 331,
    height: 265,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#250048',
    textAlign: 'center',
  },
  text: {
    color: '#404040',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    paddingTop: 12,
  },
  containerButton: {
    width: 65,
    height: 50,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});

export default styles;
