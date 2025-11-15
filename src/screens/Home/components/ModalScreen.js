import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
} from "react-native";

export default function ModalScreen({ visible, onClose, values }) {
  const [nome, setNome] = useState("");

  const adicionarNome = () => {
    if (nome === "") return;
    values(nome);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent={true} // 🔥 Importante para permitir o fundo visível
      animationType="fade"
    >
      {/* Fundo escurecido */}
      <View style={estilos.overlay}>
        {/* Caixa do popup */}
        <View style={estilos.modal}>
          <View style={estilos.header}>
            <Pressable style={estilos.botaoFechar} onPress={onClose}>
              <Text style={{ color: "white" }}>X</Text>
            </Pressable>
          </View>

          <View style={estilos.modalContent}>
            <Text style={estilos.titulo}>Criar nova lista</Text>
            <TextInput
              onChangeText={setNome}
              style={estilos.inputModal}
              placeholder="Digite o nome da lista"
            />
            <Pressable style={estilos.botaoAdd} onPress={adicionarNome}>
              <Text style={estilos.textoBotao}>Adicionar nova lista</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const estilos = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // 🔥 Fundo escuro transparente
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 347,
    padding: 20,
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "flex-end",
  },
  botaoFechar: {
    backgroundColor: "#ff0d00ff",
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    alignItems: "center",
    marginTop: 10,
  },
  titulo: {
    fontSize: 24,
    color: "#484848",
    marginBottom: 10,
  },
  inputModal: {
    borderColor: "#CBCBCB",
    borderWidth: 1,
    borderRadius: 10,
    width: 281,
    margin: 10,
    paddingHorizontal: 8,
  },
  botaoAdd: {
    backgroundColor: "#F17144",
    width: 252,
    height: 49,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
});
