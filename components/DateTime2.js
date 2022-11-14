import { Button, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef } from "react";
import { useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import BottomSheet from 'use'

const DateTime2 = () => {
  const bottomSheetRef = useRef(null)
  const [open, setOpen] = useState(true);
  const [localErrs, setLocalErrs] = useState({
    firstName: null,
    secondName: null,
    password: null,
    email: null,
  })
  // const snapPoints = ["50%"];
  const snapPoints = ["40%", "60%", "80%"]

  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index)
    setOpen(true);
    console.log('open nah !!!')
  }, []);

  const res =  [
    { param: "secondName", msg: "second name is required" },
    { param: "password", msg: "password is required" },
    { param: "firstName", msg: "required" }
]







  return (
    <View style={[styles.container,{ backgroundColor: open ? "#00000050" : "white",}]}>
      <Text>Heloo world!</Text>
      {
        res.map((item, i) =>(
          <View style={{flexDirection:'row'}}> 
            <Text>{i}{" "}</Text>
            <Text>{item.param}</Text>
            <Text>{item.msg}</Text>
          </View>
        ))
      }
      <Button onPress={() => handleSnapPress(0)} title="Open Sheeet" />
      {/* <Button onPress={() => submitFoo()} title="response" /> */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setOpen(false)}
      >
        <BottomSheetView>
          <Text>hey press!!!</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default DateTime2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    alignItems: "center",
    justifyContent: "center",
  },
});
