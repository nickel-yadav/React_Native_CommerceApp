import { StyleSheet, View } from "react-native";
import React from "react";

import HeaderTitle from "./HeaderTitle";
import SearchBar from "./SearchBar";
import DeliveryDropdown from "./DeliveryDropdown";

export default function HeaderTop() {
  return (
    <View style={styles.headerTop}>
      <HeaderTitle />
      <SearchBar />
      <DeliveryDropdown />
    </View>
  );
}
const styles = StyleSheet.create({
  headerTop: {
    backgroundColor: "#2A4BA0",
    padding: 18,
  },
});
