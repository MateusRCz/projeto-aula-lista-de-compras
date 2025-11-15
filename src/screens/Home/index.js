import React from "react";
import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import Top from "./components/Top";
import Search from "./components/Search";
import Card from "./components/Card";
import ModalScreen from "./components/ModalScreen";
import ModalEditar from "./components/ModalEditar";
import ModalExcluir from "./components/ModalExcluir";
import ButtonAdd from "./components/ButtonAdd";

// import plus from "./src/assets/plus.svg";
export default function Home() {
  const [card, setCard] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEditarVisible, setModalEditarVisible] = useState(false);
  const [modalExcluirVisible, setModalExcluirVisible] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [query, setQuery] = useState("");

  function adicionarLista(nome) {
    const now = new Date();
    const dateFormat = now.toLocaleDateString("pt-BR");
    const hourFormat = now.toLocaleTimeString("pt-BR");
    const novoCard = { nome, data: `${dateFormat} ${hourFormat}` };
    setCard(prev => [...prev, novoCard]);
  }

  function editarLista(novoNome) {
    if (!itemSelecionado) return;
    setCard(prev =>
      prev.map(item =>
        item === itemSelecionado ? { ...item, nome: novoNome } : item
      )
    );
    setModalEditarVisible(false);
  }

  function excluirLista() {
    if (!itemSelecionado) return;
    setCard(prev => prev.filter(item => item !== itemSelecionado));
    setModalExcluirVisible(false);
  }

  const fazerPesquisa = card.filter(card =>
    card.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={estilos.tela}>
      <Top />
      <Search setQuery={setQuery} />
      <Card
        nomes={fazerPesquisa}
        onEditar={(item) => { setItemSelecionado(item); setModalEditarVisible(true); }}
        onExcluir={(item) => { setItemSelecionado(item); setModalExcluirVisible(true); }}
      />
      <ModalScreen
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        values={adicionarLista}
      />
      <ModalEditar
        visible={modalEditarVisible}
        onClose={() => setModalEditarVisible(false)}
        onSalvar={editarLista}
        item={itemSelecionado}
      />
      <ModalExcluir
        visible={modalExcluirVisible}
        onClose={() => setModalExcluirVisible(false)}
        onConfirmar={excluirLista}
        item={itemSelecionado}
      />
      <ButtonAdd valor={setModalVisible} />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
