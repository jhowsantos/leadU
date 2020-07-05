import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';

import styles from './styles';

const Login = (props) => {
  const [disable, setDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyFields = () => {
    if (email.length > 0 && password.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
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
            onBlur={() => verifyFields()}
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
            onBlur={() => verifyFields()}
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
          onPress={() => props.navigation.navigate('Home')}
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
