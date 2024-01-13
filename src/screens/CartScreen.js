import { StyleSheet, View } from "react-native";
import React from "react";
import CartHeaderTop from "../components/CartHeaderTop";
import CartItemList from "../components/CartItemList";
import CartCheckoutCard from "../components/CartCheckoutCard";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <View style={styles.container}>
      <CartHeaderTop />
      <CartItemList cartItems={cartItems} />
      <CartCheckoutCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 18,
  },
});
