import { SafeAreaView } from "react-native";
import React from "react";
import HeaderTop from "../components/HeaderTop";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <HeaderTop />
    </SafeAreaView>
  );
}
