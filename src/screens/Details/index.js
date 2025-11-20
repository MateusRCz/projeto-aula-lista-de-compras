import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Topo from "./components/Top";
import Pesquisa from "./components/Search";

export default function Details() {
  const route = useRoute();
  const { item } = route.params || {};

  return (
    <View style={estilos.tela}>
      <Topo />
      <Pesquisa />

      {item ? (
        <View style={estilos.card}>
          <Text style={estilos.titulo}>Detalhes da Lista</Text>
          <Text style={estilos.texto}>Nome: {item.nome}</Text>
          <Text style={estilos.texto}>Data: {item.data}</Text>
        </View>
      ) : (
        <Text style={estilos.texto}>Nenhum item selecionado.</Text>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#EDEDED",
    padding: 16,
  },
  card: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    marginBottom: 4,
  },
});
