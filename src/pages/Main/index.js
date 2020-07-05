import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setTitleExample } from '~/store/main/actions';
import BackgroundColor from 'react-native-background-color';

const Main = (props) => {
  useEffect(() => {
    BackgroundColor.setColor('#FFFFFF');
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Mega Hack</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({});

const mapStateToDispatch = {};

export default connect(mapStateToProps, mapStateToDispatch)(Main);
