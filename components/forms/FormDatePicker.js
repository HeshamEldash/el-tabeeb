import React from "react";
import { useFormikContext } from "formik";


import AppDatePicker from "../AppDatePicker";
import ErrorMessage from "./ErrorMessage";

function FormDatePicker({ name, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  const handleSubmit = (selectedDate) => {
    setFieldValue(name, selectedDate);
  };

  return (
    <>
      <AppDatePicker
        handleSubmit={handleSubmit}
        onClick={() => setFieldTouched(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}


export default FormDatePicker;
