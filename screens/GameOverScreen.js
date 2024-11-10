import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/success.png')}
                    style={styles.image}
                />
            </View>
            {/* You can wrap Text component in Text component but not a View Component */}
            <Text style={styles.summaryText}>
                Your phone needed 
                <Text style={styles.highlight}>{roundsNumber}</Text> 
                rounds to guess the number 
                <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: "white",
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 25,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})