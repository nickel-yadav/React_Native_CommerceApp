import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function HeaderTitle({ userName }) {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleNavToCart = () => {
    navigation.navigate("Cart");
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((totalQuantity, item) => {
      return totalQuantity + (item.itemQuantity || 0);
    }, 0);
  };

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.heading}>Hey {userName}</Text>
      <TouchableOpacity onPress={handleNavToCart}>
        <SimpleLineIcons name="handbag" size={16} color="white" />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{getTotalQuantity()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 22,
    fontFamily: "manrope-600",
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 52,
  },
  badge: {
    position: "absolute",
    bottom: 12,
    left: 8,
    backgroundColor: "#FFC83A",
    paddingHorizontal: 4,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: "manrope-800",
  },
});
