import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function BemVindo() {

  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  /*const handleLogin = () => {
    // Lógica de autenticação aqui (pode ser adicionada posteriormente)
    if (nome === '' || senha === '') {
      alert('Campos em branco. Preencha todos os campos.');
    } else {
      // Aqui você pode adicionar a lógica de autenticação
      navigation.navigate('home')
    }
  };*/

  return (
    <View style={styles.container}>
      {/* Adicionando uma tag de imagem no topo */}
      <Image
        source={require('../assets/WhatsApp Image 2023-11-15 at 11.16.53 AM.jpeg')} // Substitua com o caminho correto da sua imagem
        style={styles.logo}
      />
      <Text style={styles.titulo}>Classifica Grãos</Text>
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
        <TouchableOpacity style={styles.botao} onPress={() => {
            if(!nome === 'zezinho' || senha === '123'){
              navigation.navigate('home')
            } else {
              alert('Usuário ou senha incorreto');
            }
            }}>
          <Text style={styles.textoBotao}>Entrar</Text>
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
    width: 230,
    height: 230,
    marginBottom: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  titulo: {
    fontFamily:'Verdana',
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center'
  },
  form: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 13,
    borderRadius: 5
  },
  botao: {
    backgroundColor: '#00B25A',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#00B25A',
    height: 50,
    fontWeight: 'bold'
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});