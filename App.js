import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Toptab from "./screens/Toptab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";




const Stack = createNativeStackNavigator();

export default function App() {

 
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>

    <Stack.Screen name="tab" component={Toptab} options={{headerShown:false}}/>
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