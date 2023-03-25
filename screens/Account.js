import React from 'react';
import { View, StyleSheet } from 'react-native';
import useAuth from '../auth/useAuth';
import Button from '../components/Button';
import Screen from './Screen';

function Account(props) {
    const {logOut}= useAuth()
  return (
    <Screen>
        <Button title={"Logout"} onPress={()=>logOut()}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Account;