import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Homee from './pages/Login';
import Pharmacy from './pages/Pharmacy';
import Maps from './pages/Maps';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homee"
          component={Homee}
          options={{title: 'Homee', headerShown: false}}          
        /> 
        <Stack.Screen
          name="Pharmacy"
          component={Pharmacy}
          options={{title: 'Pharmacy'}}          
        />
            <Stack.Screen
          name="Maps"
          component={Maps}
          options={{title: 'Maps'}}          
        />
           
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
