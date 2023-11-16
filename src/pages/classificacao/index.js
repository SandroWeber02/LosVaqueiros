// MeuFormulario.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Input } from 'react-native-elements';

const Classificacao = () => {
  const [valorInput, setValorInput] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularResultado = () => {
    // Lógica de cálculo com base no valor do input
    const resultadoCalculado = parseFloat(valorInput) * 2; // Exemplo simples, substitua pela lógica desejada
    setResultado(resultadoCalculado.toString());
  };

  return (
    <View>
      <Input
        label="Amostra"
        placeholder="Valor em (g)"
        keyboardType="numeric"
        value={valorInput}
        onChangeText={(text) => setValorInput(text)}
      />
      <Button title="Calcular" onPress={calcularResultado} />

      {resultado !== '' && (
        <Input
          label="Resultado"
          placeholder="Resultado"
          value={resultado}
          editable={false}
        />
      )}
    </View>
  );
};

export default Classificacao;
