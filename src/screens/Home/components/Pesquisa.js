import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

export default function Pesquisa() {
  return (
    <View>
      <TextInput
        style={estilos.input}
        placeholder="Pesquisar por listas"
      ></TextInput>
    </View>
  );
}

const estilos = StyleSheet.create({
  input: {
    justifyContent: "center",
    margin: 20,
    backgroundColor: "#F5F5F5",
    borderColor: "#cbc7c7ff",
    borderWidth: 1,
    borderRadius: 10,
    height: 44,
    color: "#C4C4C4",
  }
});