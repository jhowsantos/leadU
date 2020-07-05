import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const data = [
  {
    id: 1,
    name: 'Camisa Masculina P',
    orderPurchase: 155876,
    image: require('../../assets/t-shirt.png'),
  },
  {
    id: 2,
    name: 'Camisa Feminina M',
    orderPurchase: 144665,
    image: require('../../assets/t-shirt.png'),
  },
  {
    id: 3,
    name: 'Chinelo Sunset',
    orderPurchase: 147858,
    image: require('../../assets/t-shirt.png'),
  },
];

const SellInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          sonPress={() => {}}
        >
          <FontAwesome name="bars" style={styles.menuItem} />
          <Text style={styles.textMenu}>menu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Informações de venda</Text>
      </View>

      <View style={styles.containerChannelInfos}>
        <View style={styles.iconContainer}>
          <Ionicons name="logo-whatsapp" style={styles.icon} />
        </View>
        <View style={styles.detailsChannel}>
          <Text style={styles.price}>R$ 684,00</Text>
          <Text style={styles.qtdSell}>22 Vendas concluídas</Text>
        </View>
      </View>

      <View style={styles.containerListItems}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={{ width: '85%' }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.order}>Pedido {item.orderPurchase}</Text>
              </View>
              <View style={{ width: '15%' }}>
                <TouchableOpacity style={{ height: 70 }} onPress={() => {}}>
                  <Ionicons
                    name="chevron-down-outline"
                    style={styles.chevron}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.containerFloatButton}>
        <TouchableOpacity style={styles.floatButtonCog} onPress={() => {}}>
          <FontAwesome name="cog" style={styles.iconFloat} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.floatButtonMic} onPress={() => {}}>
          <Ionicons name="mic-outline" style={styles.iconFloat} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.floatButtonCart} onPress={() => {}}>
          <Ionicons name="cart-outline" style={styles.iconFloat} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SellInformation;
