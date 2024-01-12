import { SafeAreaView } from "react-native";
import React from "react";
import HeaderTop from "../components/HeaderTop";
import { StatusBar } from "expo-status-bar";
import OffersCarousel from "../components/OffersCarousel";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <HeaderTop />
      <OffersCarousel />
    </SafeAreaView>
  );
}
