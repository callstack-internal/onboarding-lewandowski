import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { ListItem } from "../components/ListItem";
import { CITIES_LIST } from "../consts";
import { Separator } from "../elements/Separator";
import { getCurrentWeatherForGroup } from "../network/api";
import { ComponentWeatherData } from "../network/types";

export const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState();

  const getData = async () => {
    try {
      const res = await getCurrentWeatherForGroup(CITIES_LIST);
      if (!res.data) {
        throw new Error();
      }

      const normalizeWeatherData: any = [];
      res.data.list.forEach((item) => {
        normalizeWeatherData.push({
          name: item.name,
          dataId: item.id,
          ...item.weather[0],
          ...item.main,
        });
      });
      setWeatherData(normalizeWeatherData);
    } catch (error) {
      console.log(error);
      Alert.alert("no weather, sorry mister");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }: { item: ComponentWeatherData }) => {
    console.log({ id: item.icon });
    return (
      <ListItem
        iconName={item.icon}
        cityName={item.name}
        description={item.description}
        temperature={item.temp}
        onPress={() => Alert.alert(item.name)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {weatherData && (
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dataId}
          ItemSeparatorComponent={() => <Separator />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
