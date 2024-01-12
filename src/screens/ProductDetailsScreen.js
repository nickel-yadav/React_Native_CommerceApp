import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ProductDetailHeader from "../components/ProductDetailHeader";
import ProductImage from "../components/ProductImage";
import ProductDetailFooter from "../components/ProductDetailFooter";

export default function ProductDetailsScreen() {
  return (
    <View>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductDetailHeader />
        <ProductImage />
        <ProductDetailFooter />
      </ScrollView>
    </View>
  );
}
