import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function ProductDetailHeader() {
  // TODO: Refactor to show half stars with correct color scheme
  const renderStars = (rating) => {
    const stars = [];
    const wholeStars = Math.floor(rating);
    const decimalPart = rating - wholeStars;

    for (let i = 0; i < wholeStars; i++) {
      stars.push(<Fontisto key={i} name="star" size={12} color="black" />);
    }

    if (decimalPart > 0) {
      stars.push(<Fontisto key="decimal" name="star" size={12} color="red" />);
    }

    for (let i = wholeStars + 1; i < 5; i++) {
      stars.push(<Fontisto key={i} name="star" size={12} color="black" />);
    }

    return stars;
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.navAndCartContainer}>
        <TouchableOpacity style={styles.backNavBtn}>
          <Entypo name="chevron-small-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="handbag" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.headingText}>Thin Choise</Text>
        <Text style={styles.subheadingText}>Top Orange</Text>
      </View>
      <View style={styles.ratingsContainer}>
        <View style={styles.ratingIconsContainer}>{renderStars(3)}</View>
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
