import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CartHeaderTop({ totalItemCount }) {
  const navigation = useNavigation();

  const handleBackNav = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.navAndCartContainer}>
      <TouchableOpacity style={styles.backNavBtn} onPress={handleBackNav}>
        <Entypo name="chevron-small-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headingText}>Shopping Cart ({totalItemCount})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navAndCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
