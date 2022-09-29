import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListView = () => {
  const comp_1 = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>hello world!</Text>
      </View>
    );
  };

  const comp_2 = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>hello world world</Text>
      </View>
    );
  };

  const arr = [
    {
      comp: comp_1(),
    },
    // {
    //   comp: comp_2(),
    // }, 
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ListView</Text>

      <FlatList
        contentContainerStyle={{ flex: 1 }}
        data={arr}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            //   backgroundColor: "plum",
            }}
          >
            {item?.comp}
          </View>
        )}
      />
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({});
