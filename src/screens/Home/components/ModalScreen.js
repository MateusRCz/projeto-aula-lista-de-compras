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
  Button,
} from "react-native";

export default function ModalScreen({ visible, onClose, values }) {
  const [nome, setNome] = useState("");

  const adicionarNome = () => {
    if (nome == "") return;
    values(nome);
    console.log("Enviando nome para main e fechando modal");
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent={false}
      animationType="fade"
      backdropColor={"rgba(24,24,24,0.2)"}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={estilos.modal}>
          <View style={{position: "absolute", top: 5, right: 5}}>
            <Pressable style={estilos.botao} onPress={onClose}>
              <Text style={{ color: "white" }}>X</Text>
            </Pressable>
          </View>

          <View style={estilos.modal2}>
            <Text style={{fontSize: 30, color: "#484848"}}>Criar nova lista</Text>
            <TextInput onChangeText={setNome} style={estilos.inputModal} />
            <Pressable
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F17144",
                width: 252,
                height: 49,
              }}
              onPress={adicionarNome}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Adicionar nova lista
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#ff0d00ff",
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "#ffffffff",
    height: 272,
    width: 347,
    margin: 40,
    borderRadius: 20,
  },
  modal2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputModal: {
    borderColor: "#CBCBCB",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    width: 281,
    margin: 10,
  },
});
