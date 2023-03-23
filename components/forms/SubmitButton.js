import React from 'react';
import { useFormikContext } from 'formik';

import Button from '../Button';
import { StyleSheet } from 'react-native';

function SubmitButton({title,style,  ...otherProps}) {
    const {handleSubmit}= useFormikContext()
  return (
    <Button title={title} onPress={handleSubmit} style={[style, styles.button]} {...otherProps}/>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    height: 40,
  },

});


export default SubmitButton;