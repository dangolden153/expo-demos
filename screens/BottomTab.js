import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DateTime from "../components/DateTime";
import DateTime2 from "../components/DateTime2";
import { icons } from "../helper/icon";
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  const tabArr = [
    {
      route: "home",
      label: "home",
      type: icons.AntDesign,
      activeIcon: "enviroment",
      inActiveIcon: "enviromento",
      component: DateTime,
      color: "plum",
    },
    {
      route: "settings",
      label: "settings",
      type: icons.AntDesign,
      activeIcon: "downcircle",
      inActiveIcon: "downcircleo",
      component: DateTime2,
      color: "blue",
    },
    {
        route: "Account",
        label: "Account",
        type: icons.AntDesign,
        activeIcon: "pluscircle",
        inActiveIcon: "pluscircleo",
        component: DateTime,
        color: "plum",
      },
  ];


  const TabButton = (props) => {
    const { item, onPress,accessibilityState } = props;
    const focused = accessibilityState.selected
    const refView = useRef(null)


    useEffect(()=>{
        if(focused){
            refView.current.animate({0:{scale:.5, rotate:'0deg'}, 1:{scale:1.5, rotate:'360deg'}})
        } else {
            refView.current.animate({0:{scale:1.5, rotate:'360deg'}, 1:{scale:1, rotate:'0deg'}})
        }
    },[focused])
    return (
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Animatable.View style={styles.btn} duration={1000} ref={refView} >
        <item.type name={item.activeIcon} size="24" color={focused ? "plum" : " black" }/>
        </Animatable.View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
            // alignItems: "center",
            // justifyContent:'center',
          height: 80,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 10,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity:  0.17,
          shadowRadius: 3.05,
          elevation: 4
        },
      }}
    >
      {tabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarLabel: item?.label,
            tabBarShowLabel: false,
            // tabBarIcon: ({color, focused})=>(
            //     <item.type name={focused ? item.activeIcon : item.inActiveIcon} size='24' color={color} />
            // ),
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
      {/* <Tab.Screen name='home' component={DateTime} />
<Tab.Screen name='setting' component={DateTime} /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
