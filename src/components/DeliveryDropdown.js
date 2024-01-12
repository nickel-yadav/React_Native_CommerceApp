import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function DeliveryDropdown() {
  return (
    <View style={styles.deliveryContainer}>
      <View>
        <Text style={styles.deliveryHeading}>DELIVERY TO</Text>
        <View style={styles.dropDownContainer}>
          <Text style={styles.deliveryContent}>Green Way 3000, Sylhet</Text>
          <Entypo name="chevron-small-down" size={18} color="white" />
        </View>
      </View>
      <View>
        <Text style={styles.deliveryHeading}>WITHIN</Text>
        <View style={styles.dropDownContainer}>
          <Text style={styles.deliveryContent}>1 Hour</Text>
          <Entypo name="chevron-small-down" size={18} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 29,
  },
  deliveryHeading: {
    fontFamily: "manrope-800",
    fontSize: 11,
    color: "#F8F9FB",
  },
  deliveryContent: {
    fontFamily: "manrope-500",
    fontSize: 14,
    color: "#F8F9FB",
  },
  dropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
