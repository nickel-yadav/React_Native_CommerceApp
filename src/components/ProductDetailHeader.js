import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

export default function ProductDetailHeader({ heading, subHeading, rating }) {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleNavToCart = () => {
    navigation.navigate("Cart");
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((totalQuantity, item) => {
      return totalQuantity + (item.itemQuantity || 0);
    }, 0);
  };

  const handleBackNav = () => {
    navigation.goBack();
  };

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const starType =
        i < Math.floor(rating)
          ? "star"
          : i < rating
          ? "star-half-empty"
          : "star";

      stars.push(
        <FontAwesome key={i} name={starType} size={12} color="#F9B023" />
      );
    }

    return stars;
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.navAndCartContainer}>
        <TouchableOpacity style={styles.backNavBtn} onPress={handleBackNav}>
          <Entypo name="chevron-small-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavToCart}>
          <SimpleLineIcons name="handbag" size={16} color="black" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{getTotalQuantity()}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.headingText}>{heading}</Text>
        <Text style={styles.subheadingText}>{subHeading}</Text>
      </View>
      <View style={styles.ratingsContainer}>
        <View style={styles.ratingIconsContainer}>{renderStars(rating)}</View>
        <Text style={styles.ratingText}>110 Reviews</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 18,
    paddingTop: 50,
  },
  navAndCartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backNavBtn: {
    padding: 8,
    aspectRatio: 1,
    borderRadius: 999,
    backgroundColor: "#F8F9FB",
  },
  badge: {
    position: "absolute",
    bottom: 12,
    left: 8,
    backgroundColor: "#FFC83A",
    paddingHorizontal: 4,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 12,
    fontFamily: "manrope-800",
  },
  descriptionContainer: {
    marginTop: 40,
  },
  headingText: {
    fontSize: 50,
    fontFamily: "manrope-300",
  },
  subheadingText: {
    fontSize: 50,
    fontFamily: "manrope-800",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginVertical: 14,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: "manrope-400",
  },
});
