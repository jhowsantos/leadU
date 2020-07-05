import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Picker } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';

import styles from './styles';

const data = [
  {
    id: 1,
    channel: 'whatsapp',
    percent: 85,
    text: 'Algum feedback',
  },
  {
    id: 2,
    channel: 'instagram',
    percent: 35,
    text: 'Algum feedback',
  },
  {
    id: 3,
    channel: 'facebook-square',
    percent: 65,
    text: 'Algum feedback',
  },
];

const Home = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <Text>Menu</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Visão Geral</Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 120 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Últimas" value="ultimas" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <View style={styles.containerItems}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => {}}>
              <View style={styles.iconContainer}>
                <FontAwesome name={item.channel} style={styles.itemIcon} />
              </View>
              <View style={styles.percent}>
                <Text style={styles.textPercent}>{item.percent}%</Text>
                <Ionicons
                  name="arrow-up-outline"
                  size={22}
                  style={{ color: '#FFF', paddingTop: 6 }}
                />
              </View>
              <View style={styles.containerProgress}>
                <Progress.Bar
                  progress={Number(`0.${item.percent}`)}
                  style={styles.progress}
                  color="#F9386A"
                  unfilledColor="#FFF"
                />
              </View>
              <View style={styles.containerTextFeedack}>
                <Text style={styles.textFeedack}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.containerTitle}>
        <Text>Desempenho</Text>
      </View>
      <View style={styles.containerChart}>
        <Text>Gráfico</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text>Comparativo Canais</Text>
        <Text>Canal: WhatsApp</Text>
      </View>
      <View style={styles.containerChart}>
        <Text>Gráfico</Text>
      </View>
    </View>
  );
};

export default Home;
