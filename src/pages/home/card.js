import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardWithButton = ({ title, subtitle }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navegar para a página 'infoDetalhada'
    navigation.navigate('infoDetalhada');
  };

  return (
    <View style={estilo.card}>
      <Text style={estilo.title}>{title}</Text>
      <Text style={estilo.subtitle}>{subtitle}</Text>
      {/* TouchableOpacity envolvendo o botão */}
      <TouchableOpacity style={estilo.buttonContainer} onPress={handlePress}>
        {/* Botão dentro do TouchableOpacity */}
        <Text style={estilo.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilo = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CardWithButton;
