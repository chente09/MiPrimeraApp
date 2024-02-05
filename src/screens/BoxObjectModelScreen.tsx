import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    },
    title:{
        textAlign:'center',
        paddingHorizontal:100,
        paddingVertical:30,
        marginHorizontal:20,
        fontSize:20,
        // width:200,
        borderWidth:7
        // backgroundColor:'red'
    }
})