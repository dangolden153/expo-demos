import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DateTime from "../components/DateTime";
import DateTime2 from "../components/DateTime2";
import { icons } from "../helper/icon";
import * as Animatable from "react-native-animatable";
import RequestRresponse from "../utils/RequestRresponse";

const Tab = createBottomTabNavigator();

const BottomTab2 = () => {

    RequestRresponse()


  const tabArr = [
    {
      route: "home",
      label: "home",
      type: icons.AntDesign,
      activeIcon: "enviroment",
      inActiveIcon: "enviromento",
      component: DateTime,
      color: "green",
      alphaColor: "#00800030",
    },
    {
      route: "settings",
      label: "settings",
      type: icons.AntDesign,
      activeIcon: "downcircle",
      inActiveIcon: "downcircleo",
      component: DateTime2,
      color: "blue",
      alphaColor: "#0000ff48",
    },
    {
      route: "Account",
      label: "Account",
      type: icons.AntDesign,
      activeIcon: "pluscircle",
      inActiveIcon: "pluscircleo",
      component: DateTime,
      color: "purple",
      alphaColor: "#b909b93f",
    },

    {
        route: "profile",
        label: "profile",
        type: icons.AntDesign,
        activeIcon: "pluscircle",
        inActiveIcon: "pluscircleo",
        component: DateTime,
        color: "#ed8600",
        alphaColor: "#d8871c",
      },
  ];

  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const refView = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
      if (focused) {
        refView.current.animate({
          0: { scale: 0 },
          1: { scale: 1 },
        });
        textRef.current.animate({
          0: { scale: 0 },
          1: { scale: 1 },
        });
      } else {
        refView.current.animate({
          0: { scale: 0 },
          1: { scale: 0 },
        });

        textRef.current.animate({
          0: { scale: 1 },
          1: { scale: 0 },
        });
      }
    }, [focused]);
    return (
      <TouchableOpacity onPress={onPress} style={[styles.btn, {flex: focused ? 1:0.7,}]}>
        <View>
          <Animatable.View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: item.color, borderRadius: 18 },
            ]}
            ref={refView}
          />

          <View
            style={[
              styles.btn_background,
              { backgroundColor: focused ? null : item.alphaColor },
            ]}
          >
            <item.type
              name={item.activeIcon}
              size="24"
              color={focused ? "white" : "gray"}
            />
            <Animatable.View ref={textRef}>
              {focused && (
                <Text style={{ color: "white", paddingHorizontal: 8 }}>
                  {item.label}
                </Text>
              )}
            </Animatable.View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingBottom:0,
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
          shadowOpacity: 0.17,
          shadowRadius: 3.05,
          elevation: 4,
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
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}
        />
      ))}
      {/* <Tab.Screen name='home' component={DateTime} />
<Tab.Screen name='setting' component={DateTime} /> */}
    </Tab.Navigator>
  );
};

export default BottomTab2;

const styles = StyleSheet.create({
  btn: {
    
    alignItems: "center",
    justifyContent: "center",
  },

  btn_background: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },
});
