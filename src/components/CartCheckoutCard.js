import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function CartCheckoutCard() {
  return (
    <View style={styles.checkoutContainer}>
      <View style={styles.checkoutContentContainer}>
        <Text style={styles.checkoutHeading}>Subtotal</Text>
        <Text style={styles.checkoutPriceText}>$ 49.59</Text>
      </View>
      <View style={styles.checkoutContentContainer}>
        <Text style={styles.checkoutHeading}>Delivery</Text>
        <Text style={styles.checkoutPriceText}>$ 49.59</Text>
      </View>
      <View style={styles.checkoutContentContainer}>
        <Text style={styles.checkoutHeading}>Total</Text>
        <Text style={styles.checkoutPriceText}>$ 49.59</Text>
      </View>
      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutBtnText}>Proceed To Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  checkoutContainer: {
    backgroundColor: "#F8F9FB",
    padding: 18,
    borderRadius: 30,
  },
  checkoutContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  checkoutHeading: {
    fontSize: 14,
    fontFamily: "manrope-400",
    color: "#616A7D",
  },
  checkoutPriceText: {
    fontSize: 14,
    fontFamily: "manrope-500",
    color: "#1E222B",
  },
  checkoutBtn: {
    width: "100%",
    padding: 18,
    backgroundColor: "#2A4BA0",
    borderRadius: 20,
  },
  checkoutBtnText: {
    fontSize: 14,
    fontFamily: "manrope-600",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
