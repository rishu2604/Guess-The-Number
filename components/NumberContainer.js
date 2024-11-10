import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container} >
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderRadius: 10,
        borderColor: Colors.accent500,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
        margin: 24
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 30
    }
})