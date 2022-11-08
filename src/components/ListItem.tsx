import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome";
import { palette } from "../theme/palette";

interface Props {
  iconName: string;
  cityName: string;
  description: string;
  temperature: number;
  onPress?: () => void;
}

export const ListItem = (props: Props) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={props.onPress}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: `https://openweathermap.org/img/wn/${props.iconName}.png`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.cityContainer}>
        <Text style={styles.cityName}>{props.cityName}</Text>
        <Text style={styles.descriptions}>{props.description}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.label}>
          <Text style={styles.temperature}>{`${props.temperature.toFixed(
            1
          )} °C`}</Text>
        </View>
      </View>
      {props.onPress && (
        <View style={styles.chevronContainer}>
          <Icon name="chevron-right" size={20} color={palette.light} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  iconContainer: { flex: 0.3 },
  cityContainer: { flex: 0.8, justifyContent: "center", padding: 10 },
  infoContainer: { flex: 0.5 },
  chevronContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: { fontSize: 16, color: palette.dark },
  descriptions: { fontSize: 14, color: palette.grey },
  temperature: { fontSize: 14, color: palette.cultured },
  label: {
    backgroundColor: palette.label,
    borderRadius: 15,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "100%" },
});
