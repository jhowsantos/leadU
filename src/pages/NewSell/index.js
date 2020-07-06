import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  ScrollView,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const NewSell = (props) => {
  const [selectedClient, setSelectedClient] = useState('');
  const [product, setProduct] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [delivery, setDelivery] = useState('');
  const [initSell, setInitSell] = useState(false);
  const [buttonIsVisible, setButtonIsVisible] = useState(false);
  const [floatingIsVisible, setFloatingIsVisible] = useState(true);
  const [visible, setVisible] = useState(false);

  const sendWhatsApp = () => {
    setVisible(false);
  };

  const speakingSell = () => {
    const timer = setTimeout(() => {
      setFloatingIsVisible(false);
      setProduct('Camisa Simples G');
      setDiscount('10%');
      setProduct('64,90');
      setProduct('Sem frete');

      setButtonIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.title}>Nova venda</Text>
      </View>

      <View style={styles.containerChannel}>
        <TouchableOpacity
          style={styles.contentChannel}
          onPress={() => setInitSell(true)}
        >
          <Ionicons name="logo-whatsapp" style={styles.iconChannel} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contentChannel}
          onPress={() => setInitSell(true)}
        >
          <Ionicons name="logo-instagram" style={styles.iconChannel} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contentChannel}
          onPress={() => setInitSell(true)}
        >
          <FontAwesome name="facebook-square" style={styles.iconChannel} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contentChannel}
          onPress={() => setInitSell(true)}
        >
          <FontAwesome name="globe-americas" style={styles.iconChannel} />
        </TouchableOpacity>
      </View>

      {initSell && (
        <View style={styles.containerInfosSell}>
          <View style={styles.containerPicker}>
            <Ionicons
              name="person-outline"
              size={25}
              style={{ color: '#FFF' }}
            />
            <Picker
              selectedValue={selectedClient}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedClient(itemValue)
              }
            >
              <Picker.Item
                label="Nome do Client"
                color="#F9386A"
                value="name"
              />
              <Picker.Item label="Luiza Santos" color="#F9386A" value="luiza" />
            </Picker>
          </View>

          <View style={styles.containerInput}>
            <TextInput
              onChangeText={(text) => setProduct(text)}
              value={product}
              placeholder="Produto"
              style={styles.textInput}
            />
            <Ionicons name="add-outline" style={styles.icon} />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              onChangeText={(text) => setDiscount(text)}
              value={discount}
              placeholder="Desconto"
              style={styles.textInput}
            />
            <Ionicons name="add-outline" style={styles.icon} />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              onChangeText={(text) => setFinalValue(text)}
              value={finalValue}
              placeholder="Valor final"
              style={styles.textInput}
            />
            <Ionicons name="add-outline" style={styles.icon} />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              onChangeText={(text) => setDelivery(text)}
              value={delivery}
              placeholder="Entrega"
              style={styles.textInput}
            />
            <Ionicons name="add-outline" style={styles.icon} />
          </View>
        </View>
      )}

      {buttonIsVisible && (
        <View style={styles.containerButtonLink}>
          <TouchableOpacity
            style={styles.buttonLink}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.textButtonLink}>Gerar link para venda</Text>
          </TouchableOpacity>
        </View>
      )}

      {floatingIsVisible && (
        <View style={styles.containerFloatButton}>
          <TouchableOpacity style={styles.floatButtonCog} onPress={() => {}}>
            <FontAwesome name="cog" style={styles.iconFloat} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.floatButtonMic}
            onPress={speakingSell}
          >
            <Ionicons name="mic-outline" style={styles.iconFloat} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.floatButtonCart} onPress={() => {}}>
            <Ionicons name="cart-outline" style={styles.iconFloat} />
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        // onRequestClose={props.onRequestClose}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <View style={styles.closeModal}>
              <Ionicons name="close-outline" style={styles.iconClose} />
            </View>
            <View style={styles.iconModal}>
              <FontAwesome name="paperclip" style={styles.modalIcon} />
            </View>
            <View style={styles.textModal}>
              <Text style={styles.description}>
                Link copiado para área de transferência. Envie para o canal
                desejado e aumente suas vendas.
              </Text>
            </View>
            <View style={styles.buttonModal}>
              <TouchableOpacity
                style={styles.buttonSendWhats}
                onPress={() => sendWhatsApp()}
              >
                <Text style={styles.textSendWhats}>Enviar no WhatsApp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default NewSell;
