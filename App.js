import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Home from './components/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailPage from './components/DetailPage/DetailPage';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
      <NavigationContainer>
         <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AddRecipe" component={AddRecipe} />
          <Stack.Screen name="DetailPage" component={DetailPage} />

      </Stack.Navigator>
      </NavigationContainer >

  );
}


export default App;