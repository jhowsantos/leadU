import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';

import styles from './styles';

const Login = () => {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyFields = () => {
    if (email > 0 && password > 0) {
      setDisable(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.containerInputsAndLink}>
        <View style={styles.input}>
          <Image
            source={require('../../assets/mail.png')}
            style={styles.icon}
          />
          <TextInput
            onChangeText={(text) => setEmail(text)}
            onBlur={verifyFields}
            placeholder="Email"
            style={styles.textInput}
          />
        </View>

        <View style={styles.input}>
          <Image
            source={require('../../assets/padlock.png')}
            style={styles.icon}
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            onBlur={verifyFields}
            placeholder="Senha"
            style={styles.textInput}
          />
        </View>
        <View style={styles.containerLink}>
          <Text style={styles.linkText}>Esqueceu sua senha?</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity
          disabled={disable}
          style={disable ? styles.buttonDisable : styles.buttonAccess}
          onPress={() => {}}
        >
          <Text style={disable ? styles.textAccessDisable : styles.textAccess}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
