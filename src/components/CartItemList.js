import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";

export default function CartItemList() {
  return (
    <View style={styles.itemsContainer}>
      <View style={styles.itemInfoContainer}>
        <Image
          style={{ width: 30, height: 30, marginRight: 14 }}
          source={require("../../assets/images/placeHolderImage.png")}
        />
        <View>
          <Text style={styles.itemHeadingText}>Banadaf</Text>
          <Text style={styles.itemPriceText}>$ 7.50</Text>
        </View>
      </View>
      <View style={styles.itemQuantContainer}>
        <TouchableOpacity style={styles.itemQuantActionBtn}>
          <AntDesign name="minus" size={16} color="black" />
        </TouchableOpacity>
        <Text style={styles.itemQuantText}>1</Text>
        <TouchableOpacity style={styles.itemQuantActionBtn}>
          <AntDesign name="plus" size={16} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBFB",
    marginBottom: 10,
  },
  itemInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemHeadingText: {
    fontSize: 14,
    fontFamily: "manrope-500",
  },
  itemPriceText: {
    fontSize: 14,
    fontFamily: "manrope-400",
  },
  itemQuantContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemQuantActionBtn: {
    padding: 8,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "#F8F9FB",
  },
  itemQuantText: {
    fontSize: 14,
    fontFamily: "manrope-500",
    marginHorizontal: 10,
  },
});
