import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const data = [
  {
    id: 1,
    name: 'Camisa Masculina P',
    orderPurchase: 155876,
    image: require('../../assets/t-shirt.png'),
    price: '49,99',
    client: 'Luiza Santos',
  },
  {
    id: 2,
    name: 'Camisa Feminina M',
    orderPurchase: 144665,
    image: require('../../assets/t-shirt.png'),
    price: '49,99',
    client: 'José Pedro',
  },
  {
    id: 3,
    name: 'Chinelo Sunset',
    orderPurchase: 147858,
    image: require('../../assets/t-shirt.png'),
    price: '29,99',
    client: 'Pedro Henrique',
  },
];

const SellInformation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

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
            <>
              {!collapsed ? (
                <View style={styles.itemContainer}>
                  <View style={{ width: '85%' }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.order}>
                      Pedido {item.orderPurchase}
                    </Text>
                  </View>
                  <View style={{ width: '15%' }}>
                    <TouchableOpacity
                      style={{ height: 70 }}
                      onPress={toggleExpanded}
                    >
                      <Ionicons
                        name="chevron-down-outline"
                        style={styles.chevron}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <View style={styles.itemContainerExpanded}>
                  <View style={{ width: '35%' }}>
                    <Image
                      source={require('../../assets/t-shirt.png')}
                      style={styles.image}
                    />
                  </View>

                  <View style={{ width: '65%', flexDirection: 'row' }}>
                    <View style={{ width: '82%' }}>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.order}>
                        Pedido {item.orderPurchase}
                      </Text>
                      <Text style={styles.priceItem}>R$ {item.price}</Text>
                      <Text style={styles.client}>
                        Pedido feito por {item.client}
                      </Text>
                    </View>
                    <View style={{ width: '18%' }}>
                      <TouchableOpacity
                        style={{ height: 70, marginRight: 5 }}
                        onPress={toggleExpanded}
                      >
                        <Ionicons
                          name="chevron-up-outline"
                          style={styles.chevron}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            </>
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
