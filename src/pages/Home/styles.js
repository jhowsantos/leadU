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
    height: 56,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    width: 144,
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#250048',
  },

  containerItems: {
    height: 177,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F2F2F2',
  },

  containerChart: {
    height: 220,
    marginTop: 20,
  },
  containerChartComparative: {
    height: 340,
    marginTop: 112,
  },

  containerTitleChart: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    marginTop: 15,
  },

  textChart: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#696D8C',
    paddingLeft: 8,
  },

  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#27AE60',
    marginLeft: 18,
  },

  item: {
    width: 120,
    height: 156,
    borderRadius: 10,
    paddingLeft: 13,
    backgroundColor: '#250048',
    marginHorizontal: 10,
  },

  iconContainer: {
    height: 56,
    paddingLeft: 12,
    paddingTop: 17,
  },

  itemIcon: {
    fontSize: 32,
    color: '#FFF',
  },

  percent: {
    height: 33,
    flexDirection: 'row',
  },

  containerProgress: {
    paddingTop: 8,
  },

  progress: {
    width: 93,
    borderColor: '#F2F2F2',
  },

  textPercent: {
    color: '#F9386A',
    fontSize: 30,
  },

  containerTextFeedack: {
    paddingTop: 15,
  },

  textFeedack: {
    fontSize: 12,
    fontStyle: 'normal',
    color: '#FFF',
  },

  containerFloatButton: {
    height: 50,
    width: width * 0.55,
    position: 'relative',
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
