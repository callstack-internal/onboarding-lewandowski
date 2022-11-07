import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { ListItem } from "../components/ListItem";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ListItem
        iconName="rain"
        cityName="Gdańsk"
        description="rain"
        temperature="123 *C"
        onPress={() => Alert.alert("name")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
