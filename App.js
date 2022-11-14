import { StatusBar } from "expo-status-bar";
import {Platform, StyleSheet} from "react-native";
import Toptab from "./screens/Toptab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import BottomTab from "./screens/BottomTab";
import BottomTab2 from "./screens/BottomTab2";
import FlatlistAnimation from "./screens/FlatlistAnimation";


const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="tab" component={Toptab} options={{headerShown:false}}/>
    <Stack.Screen name="BottomTab2" component={Platform.OS === 'ios' ? BottomTab2 : BottomTab} options={{headerShown:false}}/>
    <Stack.Screen name="flatlist" component={FlatlistAnimation} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
