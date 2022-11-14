import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

const FlatlistItems = ({ item, index, listVisibility, scrollY ,footerHeight}) => {
  console.log("scrollY", scrollY);
  const { height } = useWindowDimensions();

  const NOTIFICATION_HEIGHT = 85;
  const containerHeight = useDerivedValue(()=> height - 200 - footerHeight.value) ;
  const start_postion = NOTIFICATION_HEIGHT * index;

  const pos1 = start_postion - containerHeight.value;
  const pos2 = start_postion + NOTIFICATION_HEIGHT - containerHeight.value;

  const listAnimatedStyle = useAnimatedStyle(() => {
    if (listVisibility.value >= 1) {
      return {
        opacity: interpolate(scrollY.value, [pos1, pos2], [0, 1]),
        transform: [
          {
            translateY: interpolate(
              scrollY.value,
              [pos1, pos2],
              [-NOTIFICATION_HEIGHT / 2, 0],
              Extrapolate.CLAMP
            ),
          },
          {
            scale: interpolate(
              scrollY.value,
              [pos1, pos2],
              [0.8, 1],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    } else {
      return {
        transform: [
          {
            translateY: interpolate(
              listVisibility.value,
              [0, 1],
              [containerHeight.value - start_postion, 0]
            ),
          },
          { scale: interpolate(listVisibility.value, [0, 1], [0.5, 1]) },
        ],
        opacity: listVisibility.value,
      };
    }
  });



  return (
    <Animated.View style={[styles.items, listAnimatedStyle]}>
      <Image
        source={{ uri: item.image }}
        style={{
          width: 70,
          height: 60,
          marginRight: 10,
          borderRadius: 10,
        }}
      />
      <View style={styles.column}>
        <Text style={[styles.text, styles.text2]}>{item.title}</Text>
        <Text style={styles.text}>{item.decription}</Text>
      </View>
    </Animated.View>
  );
};

export default FlatlistItems;

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00000050",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 7,
  },
  text: {
    color: "white",
    width: "100%",
    backgroundColor: "plum",
  },
  text2: {
    marginBottom: 5,
    fontWeight: "bold",
  },

  column: {
    flexDirection: "column",
  },
});
