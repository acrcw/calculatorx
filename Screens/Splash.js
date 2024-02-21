import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Splash;
