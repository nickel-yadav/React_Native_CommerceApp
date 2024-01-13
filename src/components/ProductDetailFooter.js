import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductDetailFooter({
  price,
  discountPercentage,
  description,
  itemData,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function calculateDiscount(originalPrice, discountPercentage) {
    if (
      originalPrice < 0 ||
      discountPercentage < 0 ||
      discountPercentage > 100
    ) {
      console.error("Invalid input values");
      return null;
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountDifference = originalPrice - (originalPrice - discountAmount);

    return discountDifference.toFixed(2);
  }

  const handleAddToCart = () => {
    dispatch(addToCart(itemData));
  };

  const handlePurchase = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${price}</Text>
        <TouchableOpacity style={styles.discountBadge}>
          <Text style={styles.discountedPriceText}>
            ${calculateDiscount(price, discountPercentage)} OFF
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.purchaseBtnContainer}>
        <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowBtn} onPress={handlePurchase}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productDetailsContainer}>
        <Text style={styles.productHeadingText}>Details</Text>
        <Text style={styles.productDescriptionText}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 18,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    fontFamily: "manrope-400",
    marginRight: 10,
    color: "#2A4BA0",
  },
  discountBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#2A4BA0",
    borderRadius: 70,
  },
  discountedPriceText: {
    fontSize: 12,
    fontFamily: "manrope-400",
    color: "white",
  },
  purchaseBtnContainer: {
    marginVertical: 30,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  addToCartBtn: {
    padding: 18,
    borderWidth: 1,
    borderColor: "#2A4BA0",
    borderRadius: 20,
    marginRight: 20,
    flex: 1,
  },
  addToCartText: {
    fontSize: 14,
    fontFamily: "manrope-600",
    color: "#2A4BA0",
    textAlign: "center",
  },
  buyNowBtn: {
    padding: 18,
    borderWidth: 1,
    borderColor: "#2A4BA0",
    borderRadius: 20,
    backgroundColor: "#2A4BA0",
    flex: 1,
  },
  buyNowText: {
    fontSize: 14,
    fontFamily: "manrope-600",
    color: "white",
    textAlign: "center",
  },
  productDetailsContainer: {
    marginTop: 10,
    paddingBottom: 50,
  },
  productHeadingText: {
    fontSize: 16,
    fontFamily: "manrope-400",
    marginBottom: 10,
    color: "#1E222B",
  },
  productDescriptionText: {
    fontSize: 16,
    fontFamily: "manrope-400",
    color: "#8891A5",
  },
});
