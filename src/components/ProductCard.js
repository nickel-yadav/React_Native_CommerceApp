import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useDispatch } from "react-redux";
import { toggleFavourite } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigation } from "@react-navigation/core";

export default function ProductCard({ itemData, index }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(index));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(itemData));
  };

  const handleRedirectToProductDetails = () => {
    navigation.navigate("ProductDetails", { productIndex: index });
  };

  return (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <View style={styles.favouriteBtn}>
          <TouchableOpacity onPress={handleToggleFavourite}>
            {itemData.isFavourited ? (
              <AntDesign name="heart" size={12} color="#FF8181" />
            ) : (
              <AntDesign name="hearto" size={12} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleRedirectToProductDetails}>
          <Image
            style={{ width: 68, height: 68 }}
            source={itemData.thumbnail}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.priceContainer}>
          <Text>$ {itemData.price}</Text>
          <TouchableOpacity onPress={handleAddToCart}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text>{itemData.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: 150,
    height: 196,
    borderRadius: 14,
    padding: 18,
    backgroundColor: "#F8F9FB",
    justifyContent: "space-between",
  },
  productImageContainer: {
    alignItems: "center",
    width: "100%",
  },
  favouriteBtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  descriptionContainer: {
    marginTop: 14,
    width: "100%",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
