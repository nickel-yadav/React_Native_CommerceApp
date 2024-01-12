import { StyleSheet, View } from "react-native";
import React from "react";
import CartHeaderTop from "../components/CartHeaderTop";
import CartItemList from "../components/CartItemList";
import CartCheckoutCard from "../components/CartCheckoutCard";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <CartHeaderTop />
      <CartItemList />
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
