import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Box({
  id, item, quantidade, onEdit, onDelete,
  modoEdicao, editando, onCardPress, onEditFinish
}) {
  const [novoItem, setNovoItem] = useState(String(item));
  const [novaQuantidade, setNovaQuantidade] = useState(String(quantidade));
  const [marcado, setMarcado] = useState(false);

  const salvarEdicao = () => {
    onEdit(id, novoItem, Number(novaQuantidade));
    if (onEditFinish) onEditFinish();
  };

  return (
    <View style={[estilos.box, marcado && estilos.boxMarcado]}>
      {/* Checkbox só aparece fora do modo edição */}
      {!modoEdicao && (
        <Pressable onPress={() => setMarcado(!marcado)} style={estilos.checkbox}>
          <Feather name={marcado ? "check-square" : "square"} size={24} color="#FBB544" />
        </Pressable>
      )}
      {editando ? (
        <>
          <TextInput
            value={novoItem}
            onChangeText={setNovoItem}
            style={estilos.input}
          />
          <TextInput
            value={novaQuantidade}
            onChangeText={setNovaQuantidade}
            style={[estilos.input, { width: 50, marginLeft: 6 }]}
            keyboardType="numeric"
          />
          <Pressable onPress={salvarEdicao} style={estilos.edit}>
            <Feather name="save" size={22} color="#1C1C1C" />
          </Pressable>
        </>
      ) : (
        // Card só pode ser clicado no modo edição para ativar edição desse item
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
          disabled={!modoEdicao}
          onPress={() => modoEdicao && onCardPress && onCardPress()}
        >
          <Text style={[estilos.nome, marcado && estilos.textMarcado]}>
            {item}
          </Text>
          <Text style={[estilos.qtd, marcado && estilos.textMarcado]}>
            {" "}{quantidade}
          </Text>
        </Pressable>
      )}
      {/* Botão de excluir só aparece fora do modo edição */}
      {modoEdicao && (
        <Pressable onPress={() => onDelete(id)} style={estilos.delete}>
          <Feather name="trash-2" size={22} color="red" />
        </Pressable>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 13,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#F6D49B",
    shadowColor: "#000", shadowOpacity: 0.04, shadowRadius: 3,
    elevation: 2,
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
  edit: {
    marginLeft: 6, padding: 7,
    borderRadius: 12
  },
  delete: {
    marginLeft: 12,
    padding: 6,
    borderRadius: 10,
    backgroundColor: "#fff0ee"
  },
  checkbox: { marginRight: 12 },
  nome: { fontSize: 17, fontWeight: "600", color: "#393939", minWidth: 90 },
  qtd: { fontSize: 16, color: "#9E9E9E", marginLeft: 8 },
  boxMarcado: {
    backgroundColor: "#dcdcdc",
  },
  textMarcado: {
    textDecorationLine: "line-through",
    color: "#000000ff",
  }
});
