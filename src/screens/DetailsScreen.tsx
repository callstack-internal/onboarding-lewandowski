import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ListItem } from "../components/ListItem";
import { Separator } from "../elements/Separator";
import { RootStackParamList } from "../network/types";
import { palette } from "../theme/palette";

export const DetailsScreen = (
  props: NativeStackScreenProps<RootStackParamList, "Details">
) => {
  const { item } = props.route.params;
  return (
    <View style={styles.container}>
      <ListItem
        iconName={item.icon}
        cityName={item.name}
        description={item.description}
        temperature={item.temp}
      />

      <Separator />
      {!!item.humidity && (
        <>
          <View style={styles.row}>
            <Text style={styles.parameter}>Humudity</Text>
            <Text style={styles.value}>{item.humidity}%</Text>
          </View>
          <Separator />
        </>
      )}
      {!!item.pressure && (
        <>
          <View style={styles.row}>
            <Text style={styles.parameter}>Pressure</Text>
            <Text style={styles.value}>{item.pressure} hPa</Text>
          </View>
          <Separator />
        </>
      )}
      {!!item.windSpeed && (
        <>
          <View style={styles.row}>
            <Text style={styles.parameter}>Wind Speed</Text>
            <Text style={styles.value}>{item.windSpeed} mph</Text>
          </View>
          <Separator />
        </>
      )}
      {!!item.cloudCoverage && (
        <>
          <View style={styles.row}>
            <Text style={styles.parameter}>Cloud Cover</Text>
            <Text style={styles.value}>{item.cloudCoverage}%</Text>
          </View>
          <Separator />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  parameter: {
    fontSize: 16,
    fontWeight: "bold",
    color: palette.dark,
  },
  value: {
    fontSize: 16,
    color: palette.grey,
  },
});
