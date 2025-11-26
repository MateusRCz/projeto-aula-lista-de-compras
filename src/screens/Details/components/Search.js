import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import Box from "./Box";
import { mockLists } from "../../../mock/lists";

export default function Search({ idList }) {
  const [boxes, setBoxes] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [itemTexto, setItemTexto] = useState("");
  const [quantidadeTexto, setQuantidadeTexto] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    const lista = mockLists.find((l) => l.id === idList);
    if (lista) setBoxes([...lista.items]);
  }, [idList]);

  const adicionarBox = () => {
    if (itemTexto.trim() === "" || quantidadeTexto.trim() === "") return;
    const novaBox = {
      id: Date.now().toString(),
      itemName: itemTexto,
      quantity: quantidadeTexto,
    };
    const lista = mockLists.find((l) => l.id === idList);
    lista.items.push(novaBox);
    setBoxes((prev) => [...prev, novaBox]);
    setNextId(nextId + 1);
    setItemTexto("");
    setQuantidadeTexto("");
  };

  const editarBox = (id, novoItem, novaQuantidade) => {
    setBoxes((prev) =>
      prev.map((box) =>
        box.id === id
          ? { ...box, itemName: novoItem, quantity: novaQuantidade }
          : box
      )
    );
  };

  const excluirBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <View style={{ flex: 1, minHeight: 400, paddingBottom: 96 }}>
      <View style={estilos.sideView}>
        <Text style={estilos.textHead}>Item</Text>
        <Text style={estilos.textHead}>Quantidade</Text>
        <Text style={estilos.textHead}></Text>
      </View>
      {/* Inputs e botão de adicionar só aparecem fora do modo edição */}
      {!modoEdicao && (
        <View style={estilos.sideView}>
          <TextInput
            value={itemTexto}
            onChangeText={setItemTexto}
            style={estilos.input}
            placeholder="Digite o nome do item"
            placeholderTextColor="grey"
          />
          <TextInput
            value={quantidadeTexto}
            onChangeText={setQuantidadeTexto}
            style={estilos.input}
            placeholder="Selecione a quantidade"
            placeholderTextColor="grey"
          />
          <Pressable onPress={adicionarBox} style={estilos.botaoAdd}>
            {/* Coloque seu SVG aqui */}
            <Text style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>+</Text>
          </Pressable>
        </View>
      )}

      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            item={box.itemName}
            quantidade={box.quantity}
            onEdit={editarBox}
            onDelete={excluirBox}
            modoEdicao={modoEdicao}
            editando={idEditando === box.id}
            onCardPress={() => {
              if (modoEdicao) setIdEditando(box.id);
            }}
            onEditFinish={() => setIdEditando(null)}
          />
        ))}
      </View>

      {/* Botão flutuante no canto inferior direito */}
      <Pressable
        style={estilos.fab}
        onPress={() => {
          setModoEdicao((v) => !v);
          setIdEditando(null);
        }}
      >
        {/* Substitua aqui por seu SVG */}
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
          {modoEdicao ? "⨉" : "✎"}
        </Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  input: {
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#F5F5F5",
    borderColor: "#cbc7c7ff",
    borderWidth: 1,
    borderRadius: 10,
    height: 44,
    color: "#000000ff",
    minWidth: 120,
  },
  textHead: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000000ff",
  },
  sideView: {
    margin: 20,
    marginBottom: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botaoAdd: {
    backgroundColor: "#FBB544",
    width: 44,
    height: 44,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
    elevation: 2,
  },
  fab: {
    position: "absolute",
    right: 22,
    bottom: 30,
    backgroundColor: "#FBB544",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 22,
    zIndex: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
