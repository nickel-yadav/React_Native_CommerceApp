import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  Platform,
} from "react-native";
import { Image } from "expo-image";

const CARD_WIDTH = Dimensions.get("window").width * 0.7;
const CARD_HEIGHT = Dimensions.get("window").height * 0.15;
const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

const cards = [
  { discount: "50% OFF", condition: "On first 03 order" },
  { discount: "40% OFF", condition: "On first 02 order" },
  { discount: "30% OFF", condition: "On first 01 order" },
];

const OffersCarousel = () => {
  const _renderViews = (views) => {
    const { cardStyle } = styles;

    return views.map((card, index) => (
      <View key={index} style={cardStyle}>
        <View>
          <Image
            style={{ width: 68, height: 68 }}
            source={require("../../assets/images/placeHolderImage.png")}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>Get</Text>
          <Text style={styles.discountText}>{card.discount}</Text>
          <Text style={styles.conditionText}>{card.condition}</Text>
        </View>
      </View>
    ));
  };

  const { container } = styles;

  return (
    <>
      <SafeAreaView style={container}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={0}
          snapToInterval={CARD_WIDTH + 10}
          snapToAlignment="center"
          contentInset={{
            // ios only
            top: 0,
            left: SPACING_FOR_CARD_INSET,
            bottom: 0,
            right: SPACING_FOR_CARD_INSET,
          }}
          contentContainerStyle={{
            // contentInset alternative for android
            paddingHorizontal:
              Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
          }}
        >
          {_renderViews(cards)}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    height: 123,
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    backgroundColor: "#F9B023",
    margin: 5,
    borderRadius: 15,
  },
  contentContainer: {
    justifyContent: "flex-start",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  titleText: {
    fontSize: 18,
    fontFamily: "manrope-300",
    color: "white",
  },
  discountText: {
    fontSize: 22,
    fontFamily: "manrope-600",
    color: "white",
  },
  conditionText: {
    fontSize: 12,
    fontFamily: "manrope-300",
    color: "white",
  },
});

export default OffersCarousel;
