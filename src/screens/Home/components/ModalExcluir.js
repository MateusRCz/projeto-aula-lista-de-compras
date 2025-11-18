import React from "react";
import { View, Text, Pressable, Modal, StyleSheet } from "react-native";

export default function ModalExcluir({ visible, onClose, onConfirmar, item }) {
  if (!item) return null;

  return (
    <Modal transparent={true} visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={estilos.overlay}>
        <View style={estilos.modal}>
          <Text style={estilos.titulo}>Excluir lista</Text>
          <Text style={estilos.texto}>
            Tem certeza que deseja excluir "{item.nome}"?
          </Text>

          <View style={estilos.botoes}>
            <Pressable style={[estilos.botao, estilos.cancelar]} onPress={onClose}>
              <Text style={estilos.textoBotao}>Cancelar</Text>
            </Pressable>
            <Pressable style={[estilos.botao, estilos.confirmar]} onPress={onConfirmar}>
              <Text style={estilos.textoBotao}>Excluir</Text>
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
  texto: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
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
  confirmar: {
    backgroundColor: "#E53935",
  },
  cancelar: {
    backgroundColor: "#9E9E9E",
  },
  textoBotao: {
    color: "white",
    fontWeight: "bold",
  },
});
