import { Text, View } from "react-native"

export const HolaMundoScreen = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:'red',
        justifyContent: 'center',
        }}>
        <Text style={{
          fontSize: 40,
          textAlign:'center'
        }}>Hala Mundo!!!</Text>
      </View>
  )
}
