import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 130,
    fontWeight: 'bold',
    color: '#250048',
  },

  containerChannel: {
    width: width,
    height: 66,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  contentChannel: {
    width: 66,
    height: 66,
    borderWidth: 2,
    borderColor: '#250048',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconChannel: {
    fontSize: 36,
    color: '#250048',
  },

  containerInfosSell: {
    width: width,
    height: height * 0.7,
  },

  containerPicker: {
    width: 320,
    height: 54,
    marginTop: 25,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#250048',
  },

  containerInput: {
    width: 320,
    height: 54,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
  },

  textInput: {
    height: 52,
    width: 160,
    paddingLeft: 12,
    fontSize: 14,
    color: '#333333',
  },

  icon: {
    fontSize: 20,
  },

  picker: {
    height: 54,
    width: 250,
    justifyContent: 'center',
    color: '#F9386A',
    fontWeight: 'bold',
    fontSize: 16,
  },

  containerFloatButton: {
    height: 54,
    width: width * 0.55,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: height * 0.9,
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

  containerButtonLink: {
    height: 60,
    width: width,
    marginTop: 22,
    marginHorizontal: 20,
    alignItems: 'center',
  },

  buttonLink: {
    height: 40,
    width: 192,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C1EB',
  },

  textButtonLink: {
    fontSize: 16,
    color: '#FFF',
  },

  modalView: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    height: 290,
    width: 230,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#250048',
  },

  closeModal: {
    height: 40,
    width: 230,
    paddingRight: 6,
    paddingTop: 6,
    alignItems: 'flex-end',
  },

  iconClose: {
    fontSize: 35,
    color: '#E0E0E0',
  },

  iconModal: {
    height: 80,
    width: 205,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalIcon: {
    fontSize: 60,
    color: '#F9386A',
  },

  textModal: {
    height: 80,
    width: 205,
  },

  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#E0E0E0',
  },

  buttonModal: {
    height: 50,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonSendWhats: {
    height: 40,
    width: 160,
    borderRadius: 10,
    backgroundColor: '#00C1EB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textSendWhats: {
    fontSize: 14,
    color: '#FFFFFF',
  },
});

export default styles;
