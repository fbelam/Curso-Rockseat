import React from "react";
import { Text, View } from "react-native"

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
      padding: 30
      
    }}>
    <Text style={{
      color:'white',
      fontWeight: 'bold',
      fontSize: 36
    }}>
      Nome do Evento
    </Text>
    <Text style={{
      color: 'gray',
      fontSize: 16
    }}>Sexta, 4 de Novembro  de 2022.</Text>
    </View>
  ); 
}