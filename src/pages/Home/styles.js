import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMenu: {
    height: 75,
    paddingTop: 22,
  },
  containerTitle: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
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
    height: 195,
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
});

export default styles;
