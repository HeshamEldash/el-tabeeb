import React from 'react';
import { View, StyleSheet } from 'react-native';
import MedicationList from '../components/medications/MedicationList';
import Screen from './Screen';

function RegularMedicationsScreen(props) {
  return (
    <Screen style={styles.screen} dismissKeyboard={false}>
        <MedicationList/>
    </Screen>
  );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal:10,
    }
});

export default RegularMedicationsScreen;