import { createNativeStackNavigator } from "@react-navigation/native-stack";

import bemvindo from '../pages/bemvindo/index'
import login from '../pages/home/index'

const Stack =   createNativeStackNavigator();
export default function routes(){
return(
    <Stack.Navigator>
        <Stack.Screen
            name="bemvindo"
            component={bemvindo}
        />

        <Stack.Screen
            name="login"
            component={login}
        />
    </Stack.Navigator>
)
}