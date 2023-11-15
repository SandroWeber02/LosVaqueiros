import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';


export default function Agendar() {
    return(
        <>
        <View styles={estilo.container}>
            <Text style={estilo.tituloAgendamento}>Agende sua classificação</Text>

            <View style={estilo.segundaTela}>
              <TextInput style={estilo.inputTeste}></TextInput>
              <TextInput style={estilo.inputTeste}></TextInput>
              <TextInput style={estilo.inputTeste}></TextInput>
            </View>
        </View>
        </>
    );
  }
  
  const estilo = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    segundaTela: {
      backgroundColor: '#00B25A',
      height: 600,
      borderRadius: 25,
    },
    tituloAgendamento: {
      alignSelf: 'center',
      fontSize: 25,
      marginBottom: 35
    },
    inputTeste: {
      width: 300,
      backgroundColor: 'white',
      alignSelf: 'center',
      padding: 15,
      marginTop: 20,
      borderRadius: 15,
    }

  });
  