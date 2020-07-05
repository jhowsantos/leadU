import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BackgroundColor from 'react-native-background-color';
import AppIntroSlider from 'react-native-app-intro-slider';

import styles from './styles';

const slides = [
  {
    key: '1',
    title: 'Gestão',
    text: 'Acesso rápido com visão detalhada de todos os seus canais de venda',
    image: require('../../assets/gestao.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: 'Automatização',
    text: 'Facilidade e praticidade para gerenciar o seu negócio',
    image: require('../../assets/automatizacao.png'),
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Controle',
    text: 'Tudo em um só lugar de forma organizada e sem burocracia',
    image: require('../../assets/controle.png'),
    backgroundColor: '#22bcb5',
  },
];

const Onboarding = (props) => {
  useEffect(() => {
    BackgroundColor.setColor('#FFFFFF');
  }, []);

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.containerImage}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.containerInfos}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.containerButton}>
        <Text style={styles.textButton}>PRÓXIMA</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => props.navigation.navigate('ChooseAction')}
      >
        <Text style={styles.textButton}>PRÓXIMA</Text>
      </TouchableOpacity>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles.containerButton}>
        <Text style={styles.textButton}>VOLTAR</Text>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        renderDoneButton={_renderDoneButton}
        renderPrevButton={_renderSkipButton}
        showPrevButton={true}
        renderNextButton={_renderNextButton}
        renderItem={_renderItem}
        data={slides}
        dotStyle={{
          backgroundColor: '#E0E0E0',
          width: 15,
          height: 15,
          borderRadius: 8,
        }}
        activeDotStyle={{
          backgroundColor: '#250048',
          width: 15,
          height: 15,
          borderRadius: 8,
        }}
      />
    </>
  );
};

export default Onboarding;
