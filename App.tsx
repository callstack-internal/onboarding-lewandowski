/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

import { HomeScreen } from "./src/screens/HomeScreen";
import { palette } from "./src/theme/palette";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.backgroundColor,
  },
});
