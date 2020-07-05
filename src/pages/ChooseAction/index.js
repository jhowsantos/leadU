import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const ChooseAction = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../../assets/logo_white.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonCreateAccount} onPress={() => {}}>
          <Text style={styles.textCreateAccount}>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAccessAccount} onPress={() => {}}>
          <Text style={styles.textAccessAccount}>Acesse sua conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseAction;
