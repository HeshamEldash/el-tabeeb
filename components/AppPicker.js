import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";


function AppPicker({
  items,
  selectedItem,
  setSelectedItem,
  icon,
  placeholder,
  width = "100%",
}) {
    
  return (
    <View style={[styles.container, { width: width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          style={styles.icon}
          size={22}
          color={defaultStyles.colors.medium}
        />
      )}



      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
        style={[styles.picker]}
        itemStyle={styles.itemStyle} 
      >
    
        <Picker.Item label={placeholder} key={placeholder} value={null} style={styles.placeholder}/>
        {items.map((item) => {
          return (
            <Picker.Item
              key={item.value}
              label={item.name}
              value={item.value}
            />
          );
        })}

      </Picker>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 20,
    flexDirection: "row",
    // padding: 7,
    marginVertical: 10,
    alignContent: "center",
  },
  picker: {
    width: "90%",
    height: "100%",
  },
  icon: {
    marginLeft: 10,
    alignSelf: "center",
  },

  itemStyle: {},
  placeholder:{
    color: defaultStyles.colors.medium,

  }
});

export default AppPicker;
