import React from "react";
import { StyleSheet, View } from "react-native";
import { palette } from "../theme/palette";

export const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: palette.light,
  },
});
