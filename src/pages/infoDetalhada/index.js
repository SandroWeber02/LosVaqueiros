import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import grafhImage from '../assets/WhatsApp Image 2023-11-15 at 11.16.53 AM.jpeg';
import { Button } from 'react-native-elements';


export default function infoDetalhada() {
  return (
    <>
    <View style={estilo.container}>
      <Image source={grafhImage} />
    </View>


      <Button><Text>Relatorio</Text></Button>
      </>
  );
}
  
  const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  