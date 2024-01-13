import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";

export default function ProductCard({ title, price, thumbNail }) {
  return (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <View style={styles.favouriteBtn}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={12} color="black" />
          </TouchableOpacity>
        </View>
        <Image style={{ width: 68, height: 68 }} source={thumbNail} />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.priceContainer}>
          <Text>$ {price}</Text>
          <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text>{title}</Text>
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
