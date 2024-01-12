import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import HeaderTitle from "./HeaderTitle";
import SearchBar from "./SearchBar";
import DeliveryDropdown from "./DeliveryDropdown";
import { StatusBar } from "expo-status-bar";

export default function HeaderTop() {
  return (
    <SafeAreaView style={styles.headerTop}>
      <StatusBar style="light" />
      <HeaderTitle />
      <SearchBar />
      <DeliveryDropdown />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerTop: {
    backgroundColor: "#2A4BA0",
    padding: 18,
  },
});
