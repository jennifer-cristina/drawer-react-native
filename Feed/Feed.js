import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import dog from '../Images/dog.gif';
import cat from '../Images/cat.gif';

export function Feed({ navigation }) {
  return (
    <View style={style.container}>

      <Text>Animais</Text>

      <View style={style.imagesContainer}>
        <Image source={dog} style={style.image}/>
        <Image source={cat} style={style.image}/>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#FF0000',

  },
  imagesContainer: {
    backgroundColor: '#FF0000',
  },
  image: {
    width: 300,
    height: 200
  }
})