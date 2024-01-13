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
        <HeaderTop
          userName={"Rahul"}
          address={"Green Way 3000, Sylhet"}
          duration={1}
        />
        <OffersCarousel />
        <ProductList />
      </SafeAreaView>
    </View>
  );
}
