import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function Notifications() {
  return (
    <View style={style.container}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FF0000',

  }
})