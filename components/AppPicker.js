import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import defaultStyles from "../config/styles";

function AppPicker({items, selectedItem, setSelectedItem}) {
        
    return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
        style={styles.picker}
        itemStyle={styles.itemStyle}
      >
        {items.map((item)=>{
            return  <Picker.Item key={item.value} label={item.name} value={item.value}/>
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
    padding: 7,
    marginVertical: 10,
    alignContent: "center",
    width: 300,
  },
  picker: {
    width: "100%",
    height: "100%",
  },

  itemStyle: {},
});

export default AppPicker;
