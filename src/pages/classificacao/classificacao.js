import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'

const valor = [valorVdd, setValorVdd] = useState('')

function Resultado(){
Resultado = Amostra/Impureza*100 ;
}
export default function classificacao() {
  return (
    <View>
      <Text>classificacao</Text>
      <Text>Amostra(g)</Text>
      <TextInput name= "ValorAmostra"></TextInput>

      <Text>Impureza(g)</Text>
      <TextInput></TextInput>

      <Text>Resultado(%)</Text>
      <TextInput valeu="Resultado"></TextInput>


      A/I*100 = R
    </View>
  )
}