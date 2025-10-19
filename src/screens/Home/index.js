import React from "react";
import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import Top from "./components/Top";
import Search from "./components/Search";
import Card from "./components/Card";
import ModalScreen from "./components/ModalScreen";
import ButtonAdd from "./components/ButtonAdd";

// import plus from "./src/assets/plus.svg";

function Home() {
  const [card, setCard] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [query, setQuery] = useState("");

  function adicionarLista(nome){
    const now = new Date();
    const dateFormat = now.toLocaleDateString("pt-BR");
    const hourFormat = now.toLocaleTimeString("pt-BR");
    const novoCard = { nome, data: `${dateFormat} ${hourFormat}`};
    setCard(prev => [...prev, novoCard]);
  }

  const fazerPesquisa = card.filter((card) =>
    card.nome.toLowerCase().includes(query.toLowerCase())
  );



  return (
    <View style={estilos.tela}>
      <Top />
      <Search setQuery={setQuery}/>
      <Card nomes={fazerPesquisa} />
      <ModalScreen visible={modalVisible} onClose={() =>setModalVisible(false)} values={adicionarLista}  />
      <ButtonAdd valor={setModalVisible} />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#EDEDED",
    marginTop: 40,
  },
});
export default Home;
