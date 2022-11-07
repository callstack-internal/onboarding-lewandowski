import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../theme/palette";

interface Props {
  iconName: string;
  cityName: string;
  description: string;
  temperature: string;
  onPress: () => void;
}

export const ListItem = (props: Props) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={props.onPress}
      style={styles.container}>
      <View style={styles.iconContainer} />
      <View style={styles.cityContainer}>
        <Text style={styles.cityName}>{props.cityName}</Text>
        <Text style={styles.descriptions}>{props.description}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.label}>
          <Text style={styles.temperature}>{props.temperature}</Text>
        </View>
      </View>
      <View style={styles.chevronContainer} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    height: 50,
    alignItems: "center",
  },
  iconContainer: { backgroundColor: "red", flex: 0.3 },
  cityContainer: { flex: 0.8, justifyContent: "center", padding: 10 },
  infoContainer: { flex: 0.5 },
  chevronContainer: { backgroundColor: "green", flex: 0.2 },
  cityName: { fontSize: 14, color: "darkGrey" },
  descriptions: { fontSize: 12, color: "grey" },
  temperature: { fontSize: 14, color: "white" },
  label: {
    backgroundColor: palette.label,
    borderRadius: 15,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
