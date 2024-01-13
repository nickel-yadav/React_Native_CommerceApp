import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";

export default function HeaderTitle({ userName }) {
  return (
    <View style={styles.cartContainer}>
      <Text style={styles.heading}>Hey {userName}</Text>
      <TouchableOpacity>
        <SimpleLineIcons name="handbag" size={16} color="white" />
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
});
