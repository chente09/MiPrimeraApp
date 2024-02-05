import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>
            {/* <Button
                title="Enviar"
                onPress={()=>setcontador(contador+1)}
                color="gray" 
            /> */}
            <Fab 
            title='+1'
            onPress={()=>setcontador(contador+1)}/>
            <Fab 
            title='-1'
            position='br'
            onPress={()=>setcontador(contador-1)}/>
            {/* <TouchableOpacity 
                style={styles.fabLocationBR}
                onPress={() => setcontador(contador - 1)}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

//Estilos para el componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D35400',
        justifyContent: 'center'
    },
    title: {
        // fontFamily:'Arial',
        textAlign: 'center',
        fontSize: 30,
        position: 'relative',
        top: -50
    }
    
})