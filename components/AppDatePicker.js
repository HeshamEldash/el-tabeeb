import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppDatePicker({ placeholder = "Select Date", handleSubmit }) {
    
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setDate(selectedDate);
    setOpen(false);
    handleSubmit(selectedDate);
  };
  const openDatePicker = () => {
    setOpen(true);
  };

  return (
    <TouchableWithoutFeedback onPress={openDatePicker}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={"calendar-account"}
          size={22}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
        {date && <AppText>{date.toLocaleDateString()}</AppText>}

        {!date && <AppText style={styles.placeholder}>{placeholder}</AppText>}

        {open && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display={"calendar"}
            onChange={handleDateChange}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignContent: "center",
  },
  icon: {
    marginRight: 10,
  },
  inputBox: {
    width: "100%",
  },
  placeholder: {
    color: defaultStyles.colors.medium,
  },
});

export default AppDatePicker;
