import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";


export default function Box({ id, item, quantidade, flag, onEdit, onDelete }) {
  const [editando, setEditando] = useState(false);
  const [novoItem, setNovoItem] = useState(String(item));
  const [novaQuantidade, setNovaQuantidade] = useState(String(quantidade));
  const [marcado, setMarcado] = useState(false);

  const salvarEdicao = () => {
    onEdit(id, novoItem, Number(novaQuantidade));
    setEditando(false);
  };

  return (
    <View style={[estilos.box, marcado && estilos.boxMarcado]}>
      <Pressable onPress={() => setMarcado(!marcado)} style={estilos.checkbox}>
        <Feather name={marcado ? "check-square" : "square"} size={24}color="black" />
      </Pressable>

      <View style={estilos.info}>
        {editando ? (
          <>
            <TextInput
              value={novoItem}
              onChangeText={setNovoItem}
              style={estilos.input}
              placeholder="Editar item"
            />
            <TextInput
              value={novaQuantidade}
              onChangeText={setNovaQuantidade}
              style={estilos.input}
              placeholder="Editar quantidade"
            />
          </>
        ) : (
          <>
            <Text style={[estilos.text, marcado && estilos.textMarcado]}>
              Item: {item}
            </Text>
            <Text style={[estilos.text, marcado && estilos.textMarcado]}>
              Quantidade: {quantidade}
            </Text>
          </>
        )}
      </View>

      <View style={estilos.buttons}>
        {editando ? (
          <Pressable onPress={salvarEdicao} style={estilos.edit}>
            <Feather name="save" size={24} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={() => setEditando(true)} style={estilos.edit}>
            <Feather name="edit" size={24} color="black" />
          </Pressable>
        )}
        <Pressable onPress={() => onDelete(id)} style={estilos.delete}>
          <Feather name="trash-2" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  box: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  flag: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 5,
    height: 30
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  edit: {
    padding: 8,
    borderRadius: 5,
  },
  delete: {
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  checkbox: {
    marginBottom: 10,
    padding: 8
  },
  checkboxIcon: {
    fontSize: 24,
    transitionDuration: "300ms",
  },
  boxMarcado: {
    backgroundColor: "#dcdcdc",
  },
  textMarcado: {
    textDecorationLine: "line-through",
    color: "#000000ff",
  },
  info: {
    flexShrink: 1,
    justifyContent: "center",
  },
});
