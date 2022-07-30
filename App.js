import React from 'react';

/* Importamos os recursos necessarios para nossa navegação */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/* Importamos nossas páginas criadas para inserir dentro da navegação */
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

/* Criamos nosso navegador com a variavel Stack */
const Stack = createStackNavigator();

function App() {
  return(
    /* Abre container da navegação */
    <NavigationContainer>
      {/* Insere a navegação Stack dentro container */}
      <Stack.Navigator>
        {/*Insere as páginas dentro da navegação*/}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;