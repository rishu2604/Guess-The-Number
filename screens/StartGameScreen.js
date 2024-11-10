import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

export default function StartGame({ onPickedNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredValue(enteredText);
  }

  function resetInputHandler() {
    setEnteredValue("");
  }

  function confirmHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Alert is an object which has a method called alert and prompt
      // Alert.alert() takes title, message and optionally buttons as arguments
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      // Alert.prompt() // It would show a prompt dialog box, where we can enter a value
      return;
    }
    onPickedNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: "center"
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
