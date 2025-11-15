import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Alert,
} from "react-native";
import { Button } from "react-native-web";

export default function BotaoAdd({ OnInputChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState("");

  const criarCard = () => {
    
    OnInputChange(nome);
    console.log(nome);
    setModalVisible(false);
    
  };
    

  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Pressable onPress={() => setModalVisible(true)} style={estilos.botao}>
          <Image />
        </Pressable>
      </View>
      <View>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => {
            Alert.alert("Modal vai fechar");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={estilos.modal}>
            <Button title="X" onPress={() => setModalVisible(false)} />
            <Text>Criar nova lista</Text>
            <TextInput onChangeText={setNome} style={estilos.inputModal} />
            <Button title="Adicionar nova lista" onPress={criarCard} />
          </View>
        </Modal>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#FBB544",
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    height: 100,
    width: 300,
    margin: 40,
  },
  inputModal: {
    borderColor: "#939191ff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
  },
});
