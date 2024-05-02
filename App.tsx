
import React from 'react';
import Home from './src/screens/Home';
import Head from './src/components/Head';
import Footer from './src/components/Footer';
import PesquisaProduto from './src/screens/PesquisaProduto';
import { createNativeWrapper } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createStackNavigator();




function App(): React.JSX.Element {
  return (

   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
    </Stack.Navigator>
   </NavigationContainer>

  );
}


export default App;
