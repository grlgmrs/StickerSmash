import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ImageViewer } from "./components";

const placeholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <ImageViewer placeholderImageSource={placeholderImage} />
      </View>
      <View></View>
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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
