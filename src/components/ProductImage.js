import { StyleSheet, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

export default function ProductImage() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={{ width: 68, height: 68 }}
        source={require("../../assets/images/placeHolderImage.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 207,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
