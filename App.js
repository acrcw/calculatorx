import { StyleSheet, Text, View, StatusBar } from "react-native";
import Splash from "./Screens/Splash";
import { useState } from "react";
import MainScreen from "./Screens/MainScreen";

export default function App() {
  const [loaded, Setloaded] = useState(false);
  setTimeout(() => {
    Setloaded(true);
  }, 2000);
  return (
    <View style={styles.container}>{loaded ? <MainScreen /> : <Splash />}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});
