import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Pressable,
  Image,
} from "react-native";

import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Card({ nomes, onEditar, onExcluir, onPress }) {
  const renderCardItem = ({ item }) => (
    <Pressable onPress={() => onPress(item)} style={estilos.card}>
      <View style={estilos.conteudo}>
        <View style={estilos.cardTitulo}>
          <Text style={estilos.nomeLista}>{item.nome}</Text>
          <Text style={estilos.data}>{item.data}</Text>
        </View>

        <View style={estilos.icones}>
          <Pressable onPress={() => onEditar(item)} style={estilos.botaoIcone}>
            <Feather name="edit" size={20} color="black" />
          </Pressable>
          <Pressable onPress={() => onExcluir(item)} style={estilos.botaoIcone}>
            <MaterialIcons name="delete" size={24} color="red" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={nomes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderCardItem}
      scrollEnabled={true}
    />
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    borderColor: "#cbc7c7ff",
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    padding: 15,
    minHeight: 100,
  },
  conteudo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  cardTitulo: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  nomeLista: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  data: {
    fontSize: 12,
    color: "#666",
  },
  icones: {
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
  },
  botaoIcone: {
    padding: 5,
  },
});
