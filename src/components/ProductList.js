import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import { productData } from "../../data/products";

export default function ProductList() {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <ProductCard title={item.title} price={item.price} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Recommended</Text>
      <FlatList
        data={productData.products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  headingText: {
    fontSize: 30,
    fontFamily: "manrope-400",
    marginBottom: 10,
  },
  itemContainer: {
    paddingHorizontal: 6,
    paddingVertical: 10,
  },
});
