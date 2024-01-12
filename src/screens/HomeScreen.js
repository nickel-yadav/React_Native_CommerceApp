import { SafeAreaView, View } from "react-native";
import React from "react";
import HeaderTop from "../components/HeaderTop";
import { StatusBar } from "expo-status-bar";
import OffersCarousel from "../components/OffersCarousel";
import ProductList from "../components/ProductList";

export default function HomeScreen() {
  return (
    <View>
      <StatusBar style="light" />
      <SafeAreaView>
        <HeaderTop />
        <OffersCarousel />
        <ProductList />
      </SafeAreaView>
    </View>
  );
}
