import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import OffersCarousel from "../components/OffersCarousel";

export default function ProductList() {
  const productData = useSelector((state) => state.product.productData);

  const renderItem = ({ item, index }) => (
    <View key={item.id}>
      <ProductCard itemData={item} index={index} />
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <OffersCarousel />
          <View style={styles.container}>
            <Text style={styles.headingText}>Recommended</Text>
          </View>
        </>
      }
      columnWrapperStyle={styles.itemContainer}
      data={productData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
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
    paddingHorizontal: 18,
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
