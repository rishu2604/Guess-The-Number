import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

export default function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 35,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // It is an android specific property
        shadowColor: "black", // It is an ios specific property
        shadowOffset: { width: 0, height: 2 }, // It is an ios specific property
        shadowRadius: 6, // It is an ios specific property
        shadowOpacity: 0.25, // It is an ios specific property
    }
})