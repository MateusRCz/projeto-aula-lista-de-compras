import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  CheckBox,
  Button,
  TextInput,
} from "react-native";
import { FlatList } from "react-native";


// import cart from "./src/assets/cart.svg";

export default function Card({ nomes }) {


  // const Item = ({ nome }) => (
  //   <View>
  //     <View style={estilos.card}>
  //       <View style={estilos.cardHeader}>
  //         <Image />
  //         <Text>{nome}</Text>
  //       </View>

  //       <View style={estilos.cardHeader}>
  //         <CheckBox />
  //         <Text>Data de criação: 00/00/0000</Text>
  //         <Button />
  //         <Button color="#ff0000ff" />
  //       </View>
  //     </View>
  //   </View>
  // );

  return (
    <FlatList
      data={nomes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <View style={estilos.card}>
            <View style={estilos.cardHeader}>
              {/* <Image /> */}
              <Text>{item.nome}</Text>
            </View>

            <View style={estilos.cardHeader}>
              {/* <CheckBox /> */}
              <Text>{item.data}</Text>
              <Button title="Editar"/>
              <Button title="X" color="#ff0000ff" />
            </View>
          </View>
        </View>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderColor: "#cbc7c7ff",
    borderWidth: 1,
    borderStyle: "solid",
    height: 100,
    margin: 5,
    padding: 20,
    borderRadius: 20,
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
  },
});
