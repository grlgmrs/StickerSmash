import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

const placeholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source="./assets/images" />

      <Text style={{ color: "#fff" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
});
