import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './card';
import BotaoFlutuante from './botao';

export default function Home() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  // Função para lidar com a navegação ao pressionar o botão
  const handlePress = () => {
    navigation.navigate('infoDetalhada');
  };

  return (
    <>
      <Text style={estilo.nomePrincipal}>Olá, Seja bem Vindo</Text>
      <View>
        <Card title="Safra 2023" subtitle="Avaria de 1.30%" buttonText="Ver" />
      </View>

      <View>
        <Card
          title="Safra 2022"
          subtitle="Aproveitando de 5.60%"
          buttonText="Ver"
          onPress={handlePress}
        />
      </View>

      <View>
        <Card title="Safra 2020" subtitle="Aproveitando de 2.70%" buttonText="Ver" />
      </View>

      <BotaoFlutuante onPress={() => navigation.navigate('classificacao')}>
      </BotaoFlutuante>
    </>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nomePrincipal: {
    fontSize: 25,
    margin: 15,
    alignSelf: 'center',
  },
});
