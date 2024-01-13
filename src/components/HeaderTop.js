import { StyleSheet, View } from "react-native";
import React from "react";

import HeaderTitle from "./HeaderTitle";
import SearchBar from "./SearchBar";
import DeliveryDropdown from "./DeliveryDropdown";

export default function HeaderTop({ userName, address, duration }) {
  return (
    <View style={styles.headerTop}>
      <HeaderTitle userName={userName} />
      <SearchBar />
      <DeliveryDropdown address={address} duration={duration} />
    </View>
  );
}
const styles = StyleSheet.create({
  headerTop: {
    backgroundColor: "#2A4BA0",
    padding: 18,
  },
});
