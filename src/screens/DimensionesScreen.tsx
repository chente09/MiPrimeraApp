import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  //Hook de dimensiones
  const {width,height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
          <View style={styles.boxPurple}></View>
          <View style={styles.boxOrange}></View>
      </View>
      <Text style={styles.title}>W:{width}-  H: {height}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:200,
    backgroundColor:'red'
  },
  boxPurple:{
    width:'100%',//prcentaje
    height:'50%', //unidades
    backgroundColor:'#7d3c98'
  },
  boxOrange:{
    backgroundColor:'orange'
  },
  title:{
    fontSize:30
  }   
})