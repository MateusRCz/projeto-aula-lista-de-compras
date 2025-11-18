import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { Button, FlatList } from "react-native-web"; //eliminar
import Box from "./Box";

export default function Search({query, setQuery}) {
  const [boxes, setBoxes] = useState([]);
  const [nextId, setNextId] = useState(1);

  const adicionarBox = () => {
  if (itemTexto.trim() === '' || quantidadeTexto.trim() === '') return;

  const novaBox = {
    id: nextId,
    item: itemTexto,
    quantidade: quantidadeTexto,
    flag: true, 
  };

  setBoxes([...boxes, novaBox]);
  setNextId(nextId + 1);

  
  setItemTexto('');
  setQuantidadeTexto('');
};
const editarBox = (id, novoItem, novaQuantidade) => {
  setBoxes(prev =>
    prev.map(box =>
      box.id === id
        ? { ...box, item: novoItem, quantidade: novaQuantidade }
        : box
    )
  );
};

const excluirBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id));
  };



  const [itemTexto, setItemTexto] = useState('');
  const [quantidadeTexto, setQuantidadeTexto] = useState('');


  return (
    <View>
      <View style={estilos.sideView}>
        <Text style={estilos.textHead}>Item</Text>
        <Text style={estilos.textHead}>Quantidade</Text>
        <Text style={estilos.textHead}></Text>
      </View>
      <View style={estilos.sideView}>
        <TextInput
          value={itemTexto}
          onChangeText={setItemTexto}
          style={estilos.input}
          placeholder="Digite um item"
          placeholderTextColor="grey"
        />
        <TextInput
          value={quantidadeTexto}
          onChangeText={setQuantidadeTexto}
          style={estilos.input}
          placeholder="Selecione a quantidade"
          placeholderTextColor="grey"
        />

        <Pressable onPress={adicionarBox} style={estilos.botao}>
          <Text style={{ fontSize: 30, color: "white"}}>+</Text>
        </Pressable>
      </View>
      {boxes.map((box) => (
        <Box
          key={box.id}
          id={box.id}
          item={box.item}
          quantidade={box.quantidade}
          flag={box.flag}
          onEdit={editarBox}
          onDelete={excluirBox}
        />
      ))}

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
  },
  textHead: {
    marginLeft: 10,
    fontSize: 16,
    color: "#000000ff",
  },
  sideView:{
    margin: 20,
    marginBottom: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    backgroundColor: "#FBB544",
    width: 44,
    height: 44,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    height: "50%",
    width: "80%",
    margin: 40,
  },
});