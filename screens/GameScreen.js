import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* GUESS */}
            <View>
                <Text>
                    Higher or Lower
                </Text>
            </View>
            {/* <View>Logs Rounds</View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    }
})