import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  View,
} from "react-native";

import { ListItem } from "../components/ListItem";
import { CITIES_LIST } from "../consts";
import { Separator } from "../elements/Separator";
import { getCurrentWeatherForGroup } from "../network/api";
import { ComponentWeatherData, RootStackParamList } from "../network/types";
import { normalizeWeatherData } from "../utils";

export const HomeScreen = (
  props: NativeStackScreenProps<RootStackParamList, "Weather", undefined>
) => {
  const [weatherData, setWeatherData] = useState();

  const getData = async () => {
    try {
      const res = await getCurrentWeatherForGroup(CITIES_LIST);
      if (!res.data) {
        throw new Error();
      }

      const normalizedWeatherData: any = [];
      res.data.list.forEach((item) => {
        normalizedWeatherData.push(normalizeWeatherData(item));
      });
      setWeatherData(normalizedWeatherData);
    } catch (error) {
      Alert.alert("no weather, sorry mister");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }: { item: ComponentWeatherData }) => (
    <ListItem
      iconName={item.icon}
      cityName={item.name}
      description={item.description}
      temperature={item.temp}
      onPress={() => props.navigation.navigate("Details", { item })}
    />
  );

  return (
    <View style={styles.container}>
      {weatherData ? (
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dataId.toString()}
          ItemSeparatorComponent={() => <Separator />}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
