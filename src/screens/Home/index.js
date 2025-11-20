import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Top from "./components/Top";
import Search from "./components/Search";
import Card from "./components/Card";
import ModalScreen from "./components/ModalScreen";
import ModalEditar from "./components/ModalEditar";
import ModalExcluir from "./components/ModalExcluir";
import ButtonAdd from "./components/ButtonAdd";

export default function Home() {
  const navigation = useNavigation();
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

  const abrirDetalhes = (item) => {
    navigation.navigate("Details", { item });
    console.log("Tentou abrir a lista", item.nome);
  };

  return (
    <SafeAreaView style={estilos.tela}>
      <Top />
      <Search setQuery={setQuery} />
      <Card
        nomes={fazerPesquisa}
        onPress={abrirDetalhes}
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
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
