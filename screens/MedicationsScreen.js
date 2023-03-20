import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Medication from '../components/medications/Medication';
import MedicationList from '../components/medications/MedicationList';

import Screen from './Screen';

function MedicationsScreen(props) {
  return (
    <Screen>
          <MedicationList/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default MedicationsScreen;