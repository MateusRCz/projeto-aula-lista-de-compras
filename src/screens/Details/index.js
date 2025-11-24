import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import Topo from "./components/Top";
import Pesquisa from "./components/Search";

export default function Details() {
  const route = useRoute();
  const { item } = route.params;

  // console.log(item.id);

  return (
    <View style={estilos.tela}>
      <Topo />
      <Pesquisa idList={item.id}/>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#EDEDED",
    
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
