import { StyleSheet, View } from "react-native";
import React from "react";
import CartHeaderTop from "../components/CartHeaderTop";
import CartItemList from "../components/CartItemList";
import CartCheckoutCard from "../components/CartCheckoutCard";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const getTotalQuantity = () => {
    return cartItems.reduce((totalQuantity, item) => {
      return totalQuantity + (item.itemQuantity || 0);
    }, 0);
  };
  return (
    <View style={styles.container}>
      <CartHeaderTop totalItemCount={getTotalQuantity()} />
      <View style={styles.itemsContainer}>
        <CartItemList cartItems={cartItems} />
        <CartCheckoutCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 18,
  },
  itemsContainer: {
    justifyContent: "space-between",
    height: "90%",
  },
});
