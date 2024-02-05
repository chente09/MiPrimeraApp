import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreens = () => {
  return (
    <View style={style.container}>
        <Text style={style.box1}>Caja 1</Text>
        <Text style={style.box2}>Caja 2</Text>
        <Text style={style.box3}>Caja 3</Text>
        <Text style={style.box1}>Caja 1</Text>
        <Text style={style.box2}>Caja 2</Text>
        <Text style={style.box3}>Caja 3</Text>
        <Text style={style.box1}>Caja 1</Text>
        <Text style={style.box2}>Caja 2</Text>
        <Text style={style.box3}>Caja 3</Text>
        <Text style={style.box1}>Caja 1</Text>
        <Text style={style.box2}>Caja 2</Text>
        <Text style={style.box3}>Caja 3</Text>
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#897561',
        // flexDirection:'column-reverse', ==>Solo invierte las direcciones, pero no cumple responsiv
        // flexDirection:'row-reverse'
        // flexDirection:'row',
        // justifyContent:'space-evenly' //Mueve la ubicacion de los container
        // justifyContent:'center',
        // justifyContent:'space-around'
        // justifyContent:'space-between'
        // justifyContent:'flex-end' 
        // justifyContent:'space-evenly'
        // alignItems:'flex-end' //Define espacio del container respecto al contenido
        alignItems:'flex-start',
        flexWrap:'wrap' 
    },  
    box1:{
        // flex:4,
        // height:30,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        textAlign:'center',
        // alignSelf:'center'
    },
    box2:{
        // flex:4,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        textAlign:'center',
        // alignSelf:'flex-start'
    },
    box3:{
        // flex:2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        textAlign:'center',
        // alignSelf:'flex-end'
    }

})
