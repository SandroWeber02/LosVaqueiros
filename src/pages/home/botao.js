import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

//Botao para os cards
const botaoflutuante = ({ onPress,title }) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={(onPress)}>
      <Text style={styles.fabText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 10,
    backgroundColor: '#00B25A',
    borderRadius: 28,
    elevation: 8,

  },
  fabText: {
    color: 'white',
    fontSize: 20,
  },
});

export default botaoflutuante;