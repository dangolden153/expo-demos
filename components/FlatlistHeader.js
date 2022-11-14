import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
const FlatlistHeader = () => {
  return (
    <View style={styles.list_header}>
      <FontAwesome5 name="lock" size={24} color="white" />
      <Text style={styles.time}>1:30am</Text>
      <Text style={styles.date}>monday, november 14</Text>
    </View>
  );
};

export default FlatlistHeader;

const styles = StyleSheet.create({
  list_header: {
    backgroundColor: "transparent",
    marginTop: 30,
    marginVertical: 10,
    alignItems:'center',
    justifyContent:'center',
    padding:10
  },
  time: {
    color: "white",
    fontWeight: "300",
    fontSize: 40,
    marginVertical: 10,
  },
  date: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    textTransform:'capitalize'
  },
});
