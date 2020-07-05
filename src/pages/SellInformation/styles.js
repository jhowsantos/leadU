import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },

  containerMenu: {
    height: 76,
    paddingTop: 22,
    paddingLeft: 22,
  },

  menuItem: {
    fontSize: 26,
    color: '#F9386A',
  },

  textMenu: {
    fontSize: 16,
    paddingLeft: 8,
    color: '#312F4E',
  },

  containerTitle: {
    height: 60,
    width: width,
    marginLeft: 20,
  },

  title: {
    fontSize: 24,
    width: 150,
    fontWeight: 'bold',
    color: '#250048',
  },

  containerChannelInfos: {
    marginTop: 32,
    height: 118,
    width: 320,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#250048',
  },

  iconContainer: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 70,
    color: '#FFF',
  },

  detailsChannel: {
    width: '60%',
  },

  price: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#F9386A',
  },

  qtdSell: {
    fontSize: 14,
    color: '#E0E0E0',
  },

  itemContainer: {
    height: 70,
    width: 320,
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 15,
    backgroundColor: '#F2F2F2',
  },

  itemContainerExpanded: {
    height: 130,
    width: 320,
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 15,
    backgroundColor: '#F2F2F2',
  },

  image: {
    width: 85,
    height: 100,
    borderRadius: 10,
  },

  name: {
    fontSize: 16,
    color: '#250048',
  },

  order: {
    fontSize: 12,
    color: '#333333',
    textDecorationLine: 'underline',
    paddingTop: 5,
  },

  priceItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    paddingTop: 5,
  },

  client: {
    fontSize: 12,
    color: '#333333',
    paddingTop: 5,
  },

  chevron: {
    fontSize: 36,
    color: '#505E69',
  },

  containerListItems: {
    marginTop: 32,
    marginHorizontal: 20,
  },

  containerFloatButton: {
    height: 50,
    width: width * 0.55,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 18,
    left: width * 0.22,
  },

  floatButtonCog: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
    elevation: 5,
  },

  floatButtonMic: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
    elevation: 5,
  },

  floatButtonCart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
    elevation: 5,
  },

  iconFloat: {
    fontSize: 26,
    color: '#BDBDBD',
  },
});

export default styles;
