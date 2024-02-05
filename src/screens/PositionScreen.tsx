import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#D36800',
      justifyContent:'center',
      alignItems:'center',
      // width:400,
      // height:400
    },
    boxPurple:{
      width:100,
      height:100,
      backgroundColor:'purple',
      borderWidth:7,
      borderColor:'white',
      //top:0, //bottom, right
      // position:'relative',
      position:'absolute',
      
      
    },
    boxOrange:{
      width:100,
      height:100,
      backgroundColor:'orange',
      borderWidth:7,
      borderColor:'white',
      //top:-50, right:60
      position:'absolute',
      bottom:0,
      right:0
    },
    boxGreen:{
      // width:100,
      // height:100,
      backgroundColor:'green',
      borderWidth:7,
      borderColor:'white',
      //top:-50, right:60
      position:'absolute',
      top:0,
      left:0,
      bottom:0,
      right:0
    }

})