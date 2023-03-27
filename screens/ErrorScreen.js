import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from './Screen';

function ErrorScreen({error}) {

  return (
    <Screen style={styles.container}>
        <AppText style={styles.text}>Oops, an error has occured!</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:"center"
  },
  text:{
    fontSize:20
  }
});

export default ErrorScreen;