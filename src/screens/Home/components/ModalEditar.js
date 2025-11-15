import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Modal, StyleSheet } from "react-native";

export default function ModalEditar({ visible, onClose, onSalvar, item }) {
  const [novoNome, setNovoNome] = useState("");

  useEffect(() => {
    if (item) setNovoNome(item.nome);
  }, [item]);

  return (
    <Modal transparent={true} visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={estilos.overlay}>
        <View style={estilos.modal}>
          <Text style={estilos.titulo}>Editar lista</Text>
          <TextInput
            value={novoNome}
            onChangeText={setNovoNome}
            style={estilos.input}
          />
          <View style={estilos.botoes}>
            <Pressable style={[estilos.botao, estilos.cancelar]} onPress={onClose}>
              <Text style={estilos.textoBotao}>Cancelar</Text>
            </Pressable>
            <Pressable style={[estilos.botao, estilos.salvar]} onPress={() => onSalvar(novoNome)}>
              <Text style={estilos.textoBotao}>Salvar</Text>
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
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "100%",
    padding: 8,
    marginBottom: 15,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  botao: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  salvar: {
    backgroundColor: "#4CAF50",
  },
  cancelar: {
    backgroundColor: "#F44336",
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
});
