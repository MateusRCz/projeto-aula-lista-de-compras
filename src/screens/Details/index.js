import react from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Topo from "./components/Top";
import Pesquisa from "./components/Search";


 function Sobre() {
  
   return (
     <View style={estilos.tela}>
       <Topo />
       <Pesquisa />
     </View>
   );
 }
 
 const estilos = StyleSheet.create({
   tela: {
     flex: 1,
     backgroundColor: "#EDEDED",
   },
 });

 export default Sobre;