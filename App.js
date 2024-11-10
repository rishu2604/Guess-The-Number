import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // In this useFonts object, you must set property names that will later be used for identifying the fonts you loaded and values for these property names that point to these files that should be loaded.
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if(!fontsLoaded){
    return <AppLoading />
  }
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
    // These two updates will be batched together by React.
    // So the component is not re-rendered twice, but only once.
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGame onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
      {/* ImageBackground component is a combination of both the View and the Image component */}
      {/* style prop is set in the View of the ImageBackground */}
      {/* imageStyle is set in the Image of the ImageBackground */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15, // 15% opaque, 85% transparent
  },
});
