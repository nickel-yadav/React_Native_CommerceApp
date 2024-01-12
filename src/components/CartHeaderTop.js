import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function CartHeaderTop() {
  return (
    <View style={styles.navAndCartContainer}>
      <TouchableOpacity style={styles.backNavBtn}>
        <Entypo name="chevron-small-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headingText}>Shopping Cart (5)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navAndCartContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backNavBtn: {
    padding: 8,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "#F8F9FB",
    marginRight: 10,
  },
  headingText: {
    fontSize: 16,
    fontFamily: "manrope-400",
    color: "black",
  },
});
