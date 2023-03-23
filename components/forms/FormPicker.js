import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function FormPicker({ items,icon, name,placeholder, width }) {
  const { errors, setFieldValue, touched, values, setFieldTouched } = useFormikContext();

  const handleSelect = (itemValue) => {
    setFieldValue(name, itemValue);
    setFieldTouched(name)
  };
  return (
    <>
      <AppPicker
        items={items}
        icon={icon}
        selectedItem={values?.gender}
        setSelectedItem={handleSelect}
        placeholder={placeholder}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}


export default FormPicker;
