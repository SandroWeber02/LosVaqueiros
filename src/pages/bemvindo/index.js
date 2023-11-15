import React from 'react'
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function BemVindo() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui (pode ser adicionada posteriormente)
    if (nome === '' || senha === '') {
      alert('Campos em branco. Preencha todos os campos.');
    } else {
      // Aqui você pode adicionar a lógica de autenticação
      console.log('Nome:', nome);
      console.log('Senha:', senha);
    }
  };

  return (
    <View style={styles.container}>
      {/* Adicionando uma tag de imagem no topo */}
      <Image
        // source={require('./assets/uma-planta-crescendo-no-solo-com-o-sol-brilhando-sobre-ela_1340-38891.webp')} // Substitua com o caminho correto da sua imagem
        style={styles.logo}
      />
      <Text style={styles.titulo}>Login</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});