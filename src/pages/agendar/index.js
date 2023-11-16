import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-web';


export default function Agendar() {
    return(
        <>
        <View styles={estilo.container}>
            <Text style={estilo.tituloAgendamento}>Agende sua classificação</Text>
            <Image
            source={require('../assets/blog_tdc_lavourasoja.jpg')}
            />

            <View style={estilo.segundaTela}>
              <TextInput style={estilo.inputTeste} placeholder='Nome Completo'></TextInput>
              <TextInput style={estilo.inputTeste} placeholder='telefone'></TextInput>
              <TextInput style={estilo.inputTeste} placeholder='Email'></TextInput>
            </View>
        </View>
        </>
    );
  }
  
  //CSS
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
      justifyContent: 'center',
      alignContent: 'center'
    },
    tituloAgendamento: {
      alignSelf: 'center',
      fontSize: 25,
      marginBottom: 35,
    },
    inputTeste: {
      width: 350,
      backgroundColor: 'white',
      alignSelf: 'center',
      padding: 15,
      marginTop: 20,
      borderRadius: 15,
    }

  });
  