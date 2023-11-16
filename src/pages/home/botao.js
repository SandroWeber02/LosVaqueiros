import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

//Botao para os cards dois
const botaoflutuante = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={(onPress)}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
};

//Estilo
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 10,
    backgroundColor: '#00B25A',
    borderRadius: 28,
    elevation: 10,

  },
  fabText: {
    color: 'white',
    fontSize: 40,  // Tamanho do texto
    textAlign: 'center',  // Centraliza o texto horizontalmente
    textAlignVertical: 'center',  // Centraliza o texto verticalmente
  },
});

export default botaoflutuante;