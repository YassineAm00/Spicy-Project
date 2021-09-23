import * as React from "react";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
// import MapScreen from "./components/MapScreen";
import Profile from "./components/Profile";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
