import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
    title: string;
    position?: 'bl' | 'br'; //bl - br
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'bl' }: Props) => {//Componente reutilizable
    console.log(title)
    return (
        <TouchableOpacity
            style={[styles.fabLocation,
            (position == 'bl')
                ? styles.left
                : styles.rigth]}
            onPress={onPress}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#2C3E50',
        borderRadius: 100,
        width: 70,
        height: 70,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    fabLocation: {
        position: 'absolute',
        bottom: 20,

    },
    rigth: {
        right: 10
    },
    left: {
        left: 10
    }

})