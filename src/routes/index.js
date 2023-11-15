import { createNativeStackNavigator } from "@react-navigation/native-stack";

import bemvindo from '../pages/bemvindo/index'
import home from '../pages/home/index'
import agendar from '../pages/agendar/index'

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

    </Stack.Navigator>
)
}