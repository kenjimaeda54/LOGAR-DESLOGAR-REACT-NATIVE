import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";



import Registrar from './src/pages/Registrar';
import Logado from './src/pages/Logado/index';

console.disableYellowBox = true;




export default function App() {
   const Tab = createBottomTabNavigator();
   const icons = {
      Cadastrar: {
         name: 'log-in',
      },
      Login: {
         name: 'log-out',
      }
   
   }
   

   return (

      <NavigationContainer>

         <Tab.Navigator
            screenOptions={({route}) => ({
               tabBarIcon: ({ color, size }) => {

                  const {name} = icons[route.name]

                  return <Feather name={name} color={color} size={size} />
               }
            })}
            tabBarOptions={{
               style: { backgroundColor:'black' },
               activeTintColor: '#ddd'
            
            }}

         >

            <Tab.Screen name="Cadastrar" component={Registrar} />
            <Tab.Screen name="Login" component={Logado} />

         </Tab.Navigator>

      </NavigationContainer>
   );

}
