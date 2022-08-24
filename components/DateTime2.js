import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const DateTime2 = () => {
  const [date, setDate] = useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  console.log("date", date);
  return (
    <View style={styles.container}>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <View style={{ marginVertical: 20 }} />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <View style={{ marginVertical: 10 }} />
      <Text>selected: {date.toLocaleString()}</Text>
    </View>
  );
};

export default DateTime2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
