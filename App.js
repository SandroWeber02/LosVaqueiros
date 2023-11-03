import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { useState } from 'react';
import Api from './src/services/api'

export default function App() {

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf] = useState("")

  async function buscarCep() {
    if(cep == "") {
      Alert.alert("Cep inválido")
      setCep("")
    }

    try {
      const response = await Api.get(`/${cep}/json/`)
      setLogradouro(response.data.logradouro)
      setBairro(response.data.bairro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
      
    } catch (error) {
      console.log("ERRO" + error)
    }

  }

  return (
    <View style={styles.container}>
      <View style = {styles.topBar}>
        <Text style = {styles.title}>Buscador de CEP</Text>
      </View>

      <View style = {styles.containerCep}>
        <TextInput 
        style={{
            borderColor: "#000000",
            borderWidth: 2,
            width: 200,
            fontSize: 18,
            marginTop: 20,
            marginEnd: 20,
            borderRadius: 10,
            padding: 15
          }}
          value={cep} 
          onChangeText={(texto) => setCep(texto)} 
          placeholder='Cep'/>

        <TouchableOpacity style={styles.botaoBuscar} onPress={buscarCep}>
          <Text style={styles.textoBuscar}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <TextInput 
        style={styles.caixaTexto}
          value={logradouro} 
          onChangeText={(texto) => setLogradouro(texto)} 
          placeholder='Logradouro'/>

      <TextInput 
        style={styles.caixaTexto}
          value={bairro} 
          onChangeText={(texto) => setBairro(texto)} 
          placeholder='Bairro'/>

      <TextInput 
          style={styles.caixaTexto}
          value={localidade} 
          onChangeText={(texto) => setLocalidade(texto)} 
          placeholder='Cidade'/>

    
        <TextInput 
        style={{
            borderColor: "#000000",
            borderWidth: 2,
            width: 90,
            fontSize: 18,
            marginTop: 10,
            marginEnd: 20,
            borderRadius: 10,
            marginHorizontal: 20,
            padding: 15
          }}
          value={uf} 
          onChangeText={(texto) => setUf(texto)} 
          placeholder='Estado'/>      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  topBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#018786"
  },

  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20
  },

  containerCep: {
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20,
  },

  botaoBuscar: {
    backgroundColor: "#018786",
    width: 120,
    height: 70,
    marginTop: 30,
    marginEnd: 20,
    borderRadius: 10,
    padding: 20,
  },

  textoBuscar: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },

  caixaTexto: {
    borderColor: "#000000",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20
  }
})