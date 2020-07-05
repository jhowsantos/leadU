import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Picker,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import { LineChart, Grid } from 'react-native-chart-kit';

import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundColor: '#FFF',
  backgroundGradientFrom: '#FFF',
  backgroundGradientTo: '#FFF',
  color: (opacity = 1) => `rgba(39, 174, 96, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(108, 123, 138, ${opacity})`,
};

const chartComparativeConfig = {
  backgroundColor: '#FFF',
  backgroundGradientFrom: '#FFF',
  backgroundGradientTo: '#FFF',
  color: (opacity = 1) => `rgba(108, 123, 138, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(108, 123, 138, ${opacity})`,
};

const data = [
  {
    id: 1,
    channel: 'whatsapp',
    percent: 85,
    text: 'Whatsapp',
  },
  {
    id: 2,
    channel: 'instagram',
    percent: 35,
    text: 'Instagram',
  },
  {
    id: 3,
    channel: 'facebook-square',
    percent: 65,
    text: 'Facebook',
  },
];

const dataWhatsApp = [0, 15, 12, 20, 50, 32];
const dataInstagram = [0, 20, 25, 15, 30, 40];
const dataFacebook = [0, 1, 2, 0, 4, 7];

const dataChart = {
  labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI'],
  datasets: [
    {
      data: dataWhatsApp,
      strokeWidth: 3,
      color: (opacity = 1) => `rgba(39, 174, 96, ${opacity})`,
    },
    {
      data: dataInstagram,
      strokeWidth: 3,
      color: (opacity = 1) => `rgba(45, 156, 219, ${opacity})`,
    },
    {
      data: dataFacebook,
      strokeWidth: 3,
      color: (opacity = 1) => `rgba(246, 46, 46, ${opacity})`,
    },
  ],
};

const chartInfo = {
  labels: ['SEM 1', 'SEM 2', 'SEM 3', 'SEM 4', 'SEM 5'],
  datasets: [
    {
      data: [0, 15, 12, 20, 50, 32],
      strokeWidth: 3, // optional
    },
  ],
};

const Home = () => {
  const [selectedChannel, setSelectedChannel] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedLast, setSelectedlast] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerMenu}>
        <Text>Menu</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Visão Geral</Text>
        <Picker
          selectedValue={selectedLast}
          style={{ height: 50, width: 120 }}
          onValueChange={(itemValue, itemIndex) => setSelectedlast(itemValue)}
        >
          <Picker.Item label="Últimas" value="whatsapp" />
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

      <View style={styles.containerChart}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Desempenho</Text>
          <Picker
            selectedValue={selectedChannel}
            style={{ height: 50, width: 190 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedChannel(itemValue)
            }
          >
            <Picker.Item label="Canal:WhatsApp" value="whatsapp" />
            <Picker.Item label="Canal:Instagram" value="instagram" />
            <Picker.Item label="Canal:Facebook" value="facebook" />
            <Picker.Item label="Canal:Site" value="site" />
          </Picker>
        </View>
        <View style={styles.containerTitleChart}>
          <View style={styles.circle} />
          <Text style={styles.textChart}>Acompanhe em tempo real</Text>
        </View>
        <LineChart
          data={chartInfo}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
      </View>

      <View style={styles.containerChartComparative}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Comparativo Canais</Text>
          <Picker
            selectedValue={selectedSemester}
            style={{ height: 50, width: 140 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedSemester(itemValue)
            }
          >
            <Picker.Item label="Semestre" value="semestre" />
          </Picker>
        </View>
        <View style={styles.containerTitleChart}>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: '#27AE60',
              marginLeft: 18,
            }}
          />
          <Text style={styles.textChart}>WhatsApp</Text>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: '#2D9CDB',
              marginLeft: 18,
            }}
          />
          <Text style={styles.textChart}>Facebook</Text>
          <View
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: '#F62E2E',
              marginLeft: 18,
            }}
          />
          <Text style={styles.textChart}>Instagram</Text>
        </View>
        <LineChart
          data={dataChart}
          width={screenWidth}
          height={220}
          chartConfig={chartComparativeConfig}
        >
          <Grid />
        </LineChart>
      </View>
    </ScrollView>
  );
};

export default Home;
