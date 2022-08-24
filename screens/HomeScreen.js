import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';


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

  const navigation = useNavigation()
  return (
    // <View style={styles.container}>
    //   <Text>HomeScreen</Text>
    //   <View style={{ marginVertical: 20 }} />
    //   <Button onPress={()=>navigation.navigate('tab')} title="Go to Home Screen!" />

    // </View>


    <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
    <Animated.View
      style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
    />
    <Button
      title="toggle"
      onPress={() => {
        randomWidth.value = Math.random() * 350;
      }}
    />
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});