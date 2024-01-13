import { ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ProductDetailHeader from "../components/ProductDetailHeader";
import ProductDetailFooter from "../components/ProductDetailFooter";
import { useRoute } from "@react-navigation/core";
import { useSelector } from "react-redux";
import ImageCarousel from "../components/ImageCarousel";

export default function ProductDetailsScreen() {
  const route = useRoute();
  const { productIndex } = route.params;
  const productItem = useSelector(
    (state) => state.product.productData[productIndex]
  );

  return (
    <View>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductDetailHeader
          heading={productItem.title}
          subHeading={productItem.brand}
          rating={productItem.rating}
        />
        <ImageCarousel
          imageUrlList={productItem.images}
          isFavourited={productItem.isFavourited}
          index={productIndex}
        />
        <ProductDetailFooter
          price={productItem.price}
          discountPercentage={productItem.discountPercentage}
          description={productItem.description}
          itemData={productItem}
        />
      </ScrollView>
    </View>
  );
}
