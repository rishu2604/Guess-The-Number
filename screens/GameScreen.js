import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from " ../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1
let maxBoundary = 100
export default function GameScreen({ userNumber, onGameOver }) {    
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess===userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {
        if((direction==='lower' && userNumber>currentGuess) || (direction==='greater' && userNumber<currentGuess)){
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry!', style: "cancel"}])
            return;
        }
        if(direction==='lower'){
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess+1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    {/* bind allows you to pre-configure the parameter value that will be used in a future function execution. */}
                </View>
            </Card>
            <View>
                {/* {guessRounds.map(guess => 
                <Text key={guess}>{guess}</Text>)} */}
                <FlatList 
                    data={guessRounds} 
                    renderItem={(itemData) => <Text>itemData.item</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    }
})