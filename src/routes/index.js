import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importações
import bemvindo from '../pages/bemvindo/index'
import home from '../pages/home/index'
import Classificacao from '../pages/classificacao/index'
import infoDetalhada from '../pages/infoDetalhada'

const Stack =   createNativeStackNavigator();
export default function routes(){
return(
    <Stack.Navigator>
        <Stack.Screen
            name="bemvindo"
            component={bemvindo}
        />

        <Stack.Screen
            name="home"
            component={home}
        />

        <Stack.Screen
            name="classificacao"
            component={Classificacao}
        />

        <Stack.Screen
            name="infoDetalhada"
            component={infoDetalhada}
        />

    </Stack.Navigator>
)
}