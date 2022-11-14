import { View, Text, StyleSheet, Button, Share } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
// import RNFetchBlob from "rn-fetch-blob";

const HomeScreen = () => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  const navigation = useNavigation();

  // const configOptions = { fileCache: true };
  // RNFetchBlob.config(configOptions)
  //   .fetch('GET', response.statement_url)
  //   .then(resp => {
  //     filePath = resp.path();
  //     return resp.readFile('base64');
  //   })
  //   .then(async base64Data => {
  //     base64Data = `data:${type};base64,` + base64Data;
  //     // console.log('base64Data', base64Data)
  //     setDownloadLoader(false);
  //     await Share.share({ url: base64Data });

  //   })
  //   .catch((error) => console.log('error', error))
  //   .finally(() => setDownloadLoader(false));

  // const onShare = async () => {
  //   const statement_url = 'https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2944&q=80'
  //   try {
  //     const configOptions = { fileCache: true };
  //     RNFetchBlob.config(configOptions)
  //     .fetch('GET', statement_url)
  //     .then(resp => {
  //           filePath = resp.path();
  //           return resp.readFile('base64');
  //         })
  //         .then(async base64Data => {
  //           base64Data = `data:${type};base64,` + base64Data;
  //           console.log('base64Data', base64Data)
  //           // await Share.share({ url: base64Data });

  //         })
  //         .catch((error) => console.log('error', error))

  //     // await Share.share({
  //     //   message:
  //     //     "React Native | A framework for building native apps using React",
  //     // });
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: "black", margin: 30 },
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />

      <View style={{ marginTop: 30 }} />

      <Button
        title="bottom tab screen"
        onPress={() => navigation.navigate("BottomTab2")}
      />

      <Button
        title="Top tab screen"
        onPress={() => navigation.navigate("tab")}
      />
      <Button
        title="Flat list animation"
        onPress={() => navigation.navigate("flatlist")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
