import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";


function ver(){

    return(
        <TouchableOpacity onPress={() => (navigation.navigate('infoDetalhada'))}>
            
        </TouchableOpacity>
    )
}