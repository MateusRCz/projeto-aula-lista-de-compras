import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Topo from "./components/Topo";
import Pesquisa from "./components/Pesquisa";
import Card from "./components/Card";
import BotaoAdd from "./components/BotaoAdd";

// import plus from "./src/assets/plus.svg";

function Home() {

  const [nome, setNome] = useState("");
  const [card, setCard] = useState([]);

  return (
    <View style={estilos.tela}>
      <Topo />
      <Pesquisa />
      <Card prop={nome} />
      <BotaoAdd OnInputChange={setNome}/>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
});
export default Home;
