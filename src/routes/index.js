import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importações
import bemvindo from '../pages/bemvindo/index'
import home from '../pages/home/index'
import agendar from '../pages/agendar/index'
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
            name="agendar"
            component={agendar}
        />

        <Stack.Screen
            name="infoDetalhada"
            component={infoDetalhada}
        />

    </Stack.Navigator>
)
}