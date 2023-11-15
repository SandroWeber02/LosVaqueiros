import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CardWithButton = ({ title, subtitle, buttonText, onPressButton }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <TouchableOpacity onPress={onPressButton} style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#00B25a',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    margin: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default CardWithButton;
