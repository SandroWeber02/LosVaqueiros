import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import CardWithButton from './card';
import BotaoFlutuante from './botao';

export default function Home() {
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  return (
    <>
      <Text style={estilo.nomePrincipal}>Olá, Seja bem Vindo</Text>
      <View>
        <CardWithButton
          title="Safra 2023"
          subtitle="Avaria de 1.30%"
          buttonText="Ver"
        />
      </View>

      <View>
        <CardWithButton
          title="Safra 2022"
          subtitle="Aproveitando de 5.60%"
          buttonText="Ver"
        />
      </View>

      <View>
        <CardWithButton
          title="Safra 2021"
          subtitle="Avaria de 3.20%"
          buttonText="Ver"
        />
      </View>

      <View>
        <CardWithButton
          title="Safra 2020"
          subtitle="Aproveitando de 2.70%"
          buttonText="Ver"
        />
      </View>

      <View style={estilo.container}>
        <BotaoFlutuante title="+" onPress={() => navigation.navigate('agendar')} />
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
  nomePrincipal: {
    fontSize: 25,
    margin: 15,
    alignSelf: 'center',
  },
});
