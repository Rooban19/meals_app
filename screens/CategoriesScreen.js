import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemdata => {
  return (
    <View style={styles.gridItem}>
      <Text>{itemdata.item.title}</Text>
    </View>
  );
};
const CategoriesScreen = props => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
  },
});

export default CategoriesScreen;
