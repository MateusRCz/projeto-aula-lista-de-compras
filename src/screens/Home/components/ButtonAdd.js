import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  Alert,
  Button,
} from "react-native";

export default function ButtonAdd({ valor }) {
  const abrirModal = () => {
    valor(true);
    // console.log("Clicado");
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 20,
      }}
    >
    <Pressable onPress={abrirModal} style={estilos.botao}>
      <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
        <Text style={{ fontSize: 35, color: "white", fontWeight: "bold", lineHeight: 35, textAlign: "center" }}>+</Text>
      </View>
    </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#FBB544",
    width: 65,
    height: 65,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    height: 100,
    width: 100,
    margin: 40,
  },
  inputModal: {
    borderColor: "#939191ff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
  },
});
