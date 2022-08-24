import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Tab1 from "../components/Tab1";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import DateTime from "../components/DateTime";
import DateTime2 from "../components/DateTime2";

const Tab = createMaterialTopTabNavigator();

const Toptab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="date-1" component={DateTime2} />
      <Tab.Screen name="date-2" component={DateTime} />
      {/* <Tab.Screen name="Tab1" component={Tab1} /> */}
    </Tab.Navigator>
  );
};

export default Toptab;
