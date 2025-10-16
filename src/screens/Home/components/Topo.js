import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

export default function Topo() {

    return ( 
        <View style={estilos.topo}>
            <Text style={estilos.text}>Minhas Listas</Text>
        </View>
)};

const estilos = StyleSheet.create({
    topo:{
        backgroundColor:"#F4B036",
        display: "flex",
        justifyContent: "center",
        height: 55,
    },
    text:{
        color: "#ffff",
        display:"flex",
        justifyContent:"center",
        fontWeight: "bold",
        fontSize: 24,
    },
})



