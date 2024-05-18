import { StatusBar, View, StyleSheet } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
})