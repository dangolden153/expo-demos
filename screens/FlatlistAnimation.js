import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { data } from "../utils/ListFiles";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  withSpring,
  useDerivedValue,
} from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import FlatlistItems from "../components/FlatlistItems";
import wallpaper from '../assets/images/tree.jpg'
import FlatlistHeader from "../components/FlatlistHeader";




const FlatlistAnimation = () => {

  const listVisibility = useSharedValue(1);
  const footerVisibility = useSharedValue(1);
  const scrollY = useSharedValue(0);
  const footerHeight = useDerivedValue(() =>
    interpolate(footerVisibility.value, [0, 1], [0, 85])
  );


  const animatedFooterStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(footerVisibility.value, [0, 1], [-85, 0]),
    opacity: footerVisibility.value,
  }));

  const handler = useAnimatedScrollHandler({
    onScroll: (event) => {
      //   console.log("onScroll", event.contentOffset.y);
      const y = event.contentOffset.y;
      scrollY.value = y;

      if (y < 10) {
        // open the footer
        footerVisibility.value = withSpring(1);
      } else {
        //close the footer
        footerVisibility.value = withTiming(0);
      }
    },

    onBeginDrag: (event) => {
      if (listVisibility.value < 1) {
        listVisibility.value = withTiming(1);
        return;
      }
    },

    onEndDrag: (event) => {
      if (event.contentOffset.y < 0) {
        listVisibility.value = withTiming(0);
      }
    },
  });

  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <Animated.FlatList
        data={data}
        // contentContainerStyle={{ paddingBottom: 70}}
        //   keyExtractor={({item, index})=> index.toString()}
        showsVerticalScrollIndicator={false}
        onScroll={handler}
        scrollEventThrottle={16}
        ListHeaderComponent={
         <FlatlistHeader />
        }
        renderItem={({ item, index }) => (
          <FlatlistItems
            item={item}
            index={index}
            listVisibility={listVisibility}
            scrollY={scrollY}
            footerHeight={footerHeight}
          />
        )}
      />

      <Animated.View style={[styles.bottomContainer, animatedFooterStyle]}>
        <TouchableOpacity style={styles.icon_background}>
          <Entypo name="flashlight" size={20} color="white" />
        </TouchableOpacity>
        <Text style={[styles.text, styles.text2]}>FlatList Animation</Text>
        <TouchableOpacity style={styles.icon_background}>
          <Entypo name="camera" size={20} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};

export default FlatlistAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#734b6d",
    position: "relative",
  },

  text: {
    color: "white",
  },
  text2: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  bottomContainer: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:20,
    flexDirection: "row",

    // marginTop:10
  },
  icon_background: {
    backgroundColor: "#00000060",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    height: 50,
    width: 50,
  },
});
