import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

import compras from "../../../assets/carrinhoCompras.png"

import { useRoute } from "@react-navigation/native";


export default function Topo() {

    const route = useRoute();
    const { item } = route.params;

    return ( 
        <View style={estilos.topo}>
            <Image source={compras} style={estilos.iconeTopo} />
            <Text style={estilos.text}>{item.nameList}</Text>
        </View>
)};

const estilos = StyleSheet.create({
    topo:{
        backgroundColor:"#F4B036",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 85,
        marginTop: 35,
        width: '100%',
        flexDirection: "row",
    },
    text:{
        color: "#ffff",
        display:"flex",
        justifyContent:"center",
        fontWeight: "bold",
        fontSize: 24,
    },
    iconeTopo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
})



