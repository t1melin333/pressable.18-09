import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./componentes/TelaInicial.js";
import TelaCachorro from "./componentes/TelaCachorro.js";
import TelaGatos from "./componentes/TelaGatos.js";
import TelaCoelhos from "./componentes/TelaCoelhos.js";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component = { TelaInicial } />
        <Stack.Screen name="Cachorro" component = { TelaCachorro } />
        <Stack.Screen name="Gatos" component = { TelaGatos } />
        <Stack.Screen name="Coelho" component = { TelaCoelhos } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};